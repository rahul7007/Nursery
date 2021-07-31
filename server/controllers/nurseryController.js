const User = require('../models/UserModel')
const Product = require('../models/ProductModel')
const formidable = require('formidable')
const fs = require('fs')

exports.signup = async (req, res) => {
    const { email, password } = req.body

    try {
        //Checks if user already exists
        let user = await User.findOne({ email })
        if (user) {
            // return res.status(400).json({ error: true, message: "User Already Exists" })
            return res.json({ error: true, message: "User Already Exists" })
        }

        user = new User({
            email,
            password
        })

        await user.save()

        return res.status(200).json({ success: true, message: "User Registered Successfully", data: user })

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}

exports.signin = async (req, res) => {

    const { email, password } = req.body


    try {
        let user = await User.findOne({ email })

        if (user) {
            if (user.password === password) {
                return res.status(200).json({ success: true, message: "Signin Successful", data: user })
            } else {
                return res.json({ error: true, message: "Authentication error" })
            }
        } else {
            return res.json({ error: true, message: "Authentication error!" })
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

}

exports.createProduct = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }

        //destructure the fields
        const { name, price } = fields //sold won't come here, we'll design a middleware for it

        // if user don't provide these fields, they can't place order
        if (!name || !price) {
            return res.status(400).json({
                error: 'Please include all fields'
            })
        }

        let product = new Product(fields);

        //handle file here
        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "File size too big!"
                });
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type;
        }

        //save to the DB
        product.save((err, product) => {
            if (err) {
                res.status(400).json({
                    error: "Saving tshirt in DB failed"
                });
            }
            res.json(product);
        });
    });
};

exports.getProducts = async (req, res) => {
    await Product.find({}, (err, mbdetect) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!mbdetect) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: mbdetect })
    }).catch(err => console.log(err))
}

exports.getProductById = async (req, res) => {
    await Product.findById(req.params.productId, (err, product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!product) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: product })
    }).catch(err => console.log(err))
}

exports.addToCart = async (req, res) => {

    var newItem = true

    const { prod_id, prod_name, prod_price, prod_qty } = req.body;

    let user = await User.findOne({ _id: req.params.userId })
    let userCart = user.cart
    for (let i = 0; i < userCart.length; i++) {
        if (prod_id == userCart[i].product_id) {
            newItem = false
            userCart[i].product_qty += 1
            await user.save()
            res.json(user);
            break
        }
    }

    if (newItem) {
        const newExp = {
            product_id: prod_id,
            product_name: prod_name,
            product_price: prod_price,
            product_qty: prod_qty
        }
        user.cart.unshift(newExp)
        await user.save()
        res.json(user);
    }
}

exports.viewMyCart = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.params.userId })

        if (user.cart.length == 0) {
            return res
                .status(404)
                .json({ success: false, error: `Empty cart` })
        }
        return res.status(200).json({ success: true, data: user.cart })
    } catch (err) {
        console.log(err)
    }
}
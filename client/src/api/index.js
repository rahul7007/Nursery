import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

// export const createProduct = payload => api.post(`/insert`, payload)
// Auth
export const signup = payload => api.post(`/signup`, payload)
export const signin = payload => api.post(`/signin`, payload)

export const displayData = () => api.get(`/products`)
export const getProductById = (id) => api.get(`/product/${id}`)

//add to cart button
export const addItemToCart = (id, payload) => api.put(`/add-to-cart/${id}`, payload)

//Get the cart items of an user
export const getCartByUser = (id) => api.get(`/my-cart/${id}`)

//update cart with items quantity
export const updateCart = (userId, prodId, payload) => api.post(`/update-cart/${userId}/${prodId}`, payload)

//remove cart items
export const removeCartItem = (userId, prodId) => api.delete(`/remove-cart-item/${userId}/${prodId}`)

const apis = {
    // insertData,
    displayData,
    getProductById,
    signup,
    signin,
    addItemToCart,
    getCartByUser,
    updateCart,
    removeCartItem
}

export default apis
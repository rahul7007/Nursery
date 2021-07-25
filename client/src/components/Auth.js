import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import api from '../api';
import logo from '../images/logo1.png'
import './style.css'

const Auth = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        cpassword: ""
    });

    const [isAuth, setIsAuth] = useState(false)

    const { email, password, cpassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const signin = async (e) => {
        e.preventDefault()
        const { email, password } = formData
        const payload = { email, password }
        const { data } = await api.signin(payload)
        console.log('response', data)
        localStorage.setItem("USER", data.data._id)
        if (data.error) {
            alert("ERROR")
        } else {
            setIsAuth(true)
            sessionStorage.setItem("AUTHORISED", true)
        }
    }

    const signup = async (e) => {
        e.preventDefault()
        if (formData.password === formData.cpassword) {

            const { email, password } = formData
            const payload = { email, password }
            const { data } = await api.signup(payload)
            console.log('response', data)
            if (data.error) {
                alert("ERROR")
            } else {
                setIsAuth(true)
                sessionStorage.setItem("AUTHORISED", true)
            }
        } else {
            console.log("Password mismatch");
        }
    }

    const logout = () => {
        setIsAuth(false)
        sessionStorage.setItem("AUTHORISED", false)
    }

    return (
        <>
            {/* Top navbar */}

            <section id="topNav">
                <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#"><i class="fab fa-facebook-square"></i></a>
                            <a class="nav-link" href="#"><i class="fab fa-linkedin"></i></a>
                            <a class="nav-link" href="#"><i class="fab fa-instagram-square"></i></a>
                            <a class="nav-link flexWrapper" href="#">
                                <i class="fas fa-envelope __icon-with-mail">contact@roushan.com</i>
                            </a>
                        </div>
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link flexWrapper" href="#"><i class="fas fa-map-marker-alt px-2"></i>
                                <span>Hojai</span>
                            </a>
                            <a class="nav-link flexWrapper" href="#"><i class="fas fa-shipping-fast px-2"></i>
                                <span>Track Order</span>
                            </a>

                            {isAuth ?
                                <>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link flexWrapper dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" >
                                            <i class="fas fa-user px-2"></i>
                                            <span>Welcome <b>{formData.email}</b></span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a>
                                                    <Link class="dropdown-item" to="/cart">
                                                        Cart
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <Link class="dropdown-item" to="/my-orders">
                                                        My Orders
                                                    </Link>
                                                </a>
                                            </li>
                                            <li><a class="dropdown-item" onClick={logout}>Sign out</a></li>
                                        </ul>
                                    </li>
                                </> : <>
                                    <a class="nav-link flexWrapper" href="#">
                                        <i class="fas fa-user px-2"></i>
                                        <span data-bs-toggle="modal" href="#exampleModalToggle">Login | Sign Up</span>
                                    </a>
                                </>}
                        </div>
                    </div>
                </nav>
            </section>

            {/* Modal start */}
            <div>
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <img src={logo} className="img-fluid d-block mx-auto" style={{ height: '6.25rem', width: '6.25rem' }} />
                                        <span className="fs-3">Log In</span>
                                        <hr />
                                        Get access to your Orders, Wishlist and Recommendations.
                                    </div>
                                    <div className="col-lg-8 col-md-8 leftBorder flexWrapper">
                                        <form className="w-75 mx-auto">
                                            <div class="mb-3">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="exampleInputEmail1"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={email}
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    id="exampleInputPassword1"
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={password}
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-color w-100"
                                                data-bs-dismiss="modal"
                                                onClick={signin}
                                            >
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a className="text-center" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
                                    Don't have an account? Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <img src={logo} className="img-fluid d-block mx-auto" style={{ height: '6.25rem', width: '6.25rem' }} />
                                        <span className="fs-3">Sign Up</span>
                                        <hr />
                                        We do not share your personal details with anyone
                                    </div>
                                    <div className="col-lg-8 col-md-8 leftBorder flexWrapper">
                                        <form className="w-75 mx-auto">
                                            <div class="mb-3">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="exampleInputEmail1"
                                                    placeholder="Email address"
                                                    aria-describedby="emailHelp"
                                                    name="email"
                                                    onChange={handleChange}
                                                    value={email}
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    placeholder="Password"
                                                    id="exampleInputPassword1"
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={password}
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    placeholder="Confirm Password"
                                                    id="exampleInputPassword1"
                                                    name="cpassword"
                                                    onChange={handleChange}
                                                    value={cpassword}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-color w-100"
                                                onClick={signup}
                                                data-bs-dismiss="modal"
                                            >
                                                Create Account
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a class="text-center" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">
                                    Existing User? Log In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <a data-bs-toggle="modal" href="#exampleModalToggle">Open first modal</a> */}
            </div>

            {/* modal end */}
        </>
    )
}

export default Auth


// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import api from "../../api";

// //redux
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../action/AuthAction";
// import { useSelector } from "react-redux";

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const dispatch = useDispatch();
//     const { email, password } = formData;

//     const isAuthenticated = useSelector(
//         (state) => state.AuthReducer.isAuthenticated
//     );

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value }); ////purpose of ...formdata
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const User = {
//             email,
//             password,
//         };

//         try {
//             // await api.login(User).then((res) => {
//             //   console.log(res);
//             // });
//             dispatch(loginUser(User));
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     // Redirect to dashboard if logged in
//     if (isAuthenticated) {
//         return <Redirect to="/dashboard" />;
//     }
//     return (
//         <>
//             <h1 className="large text-primary">Sign In</h1>
//             <p className="lead">
//                 <i className="fas fa-user"></i> Sign in Your Account
//             </p>
//             <form className="form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <input
//                         type="email"
//                         placeholder="Email Address"
//                         name="email"
//                         value={email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         name="password"
//                         minLength="6"
//                         value={password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <input type="submit" className="btn btn-primary" value="Login" />
//             </form>
//             <p className="my-1">
//                 Don't have an account? <Link to="/register">Sign Up</Link>
//             </p>
//         </>
//     );
// };

// export default Login;


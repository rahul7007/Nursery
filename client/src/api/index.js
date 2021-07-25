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


const apis = {
    // insertData,
    displayData,
    getProductById,
    signup,
    signin
}

export default apis
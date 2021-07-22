import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

// export const createProduct = payload => api.post(`/insert`, payload)
export const displayData = () => api.get(`/products`)
export const getProductById = (id) => api.get(`/product/${id}`)


const apis = {
    // insertData,
    displayData,
    getProductById
}

export default apis
import axios from "@/utils/axios";

const getProducts = () => {
    return axios.get(`/products`);
};

const createProduct = async (params) => {
    return axios.post(`/product`, params);
};

const updateProduct = async (id, params) => {
    return axios.put(`/product/${id}`, params);
};

const deleteProduct = async (id) => {
    return axios.delete(`/product/${id}`);
}

export default {
    getProducts, createProduct, updateProduct, deleteProduct
}
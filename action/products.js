import axios from "axios";
import { SERVER_URL } from "../config";

export const getCategoryList = async () => {
    try {
        let res = await axios.get(`${SERVER_URL}/api/category/getAll`) ;
        return res.data ;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const getSubCategoryList = async () => {
    try {
        let res = await axios.get(`${SERVER_URL}/api/subcategory/getAll`) ;

        return res.data ;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const getProductListBySubCategoryId = async (data) => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/product/bySubCategory`, data) ;
        return res.data;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const getProductInformation = async (data) => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/product/byId`, data);

        return res.data;
    } catch(err) {
        console.log(err);
        return ;
    }
}

export const GetAllProduct = async () => {
    try {
        let res = await axios.get(`${SERVER_URL}/api/product/getAll`);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const addCart = async (id) => {
    try {
        let userid = JSON.parse(localStorage.getItem("user")).user_id ;
        let res = await axios.post(`${SERVER_URL}/api/cart/add`, {productid: parseInt(id), userid}) ;

        return res.data ;
    } catch (error) {
        console.log(error) ;
    }
}

export const getCart = async () => {
    try {
        let userid = JSON.parse(localStorage.getItem("user")).user_id ;
        let res = await axios.post(`${SERVER_URL}/api/cart/get`, {userid}) ;

        return res.data;
    } catch (error) {
        console.log(error) ;
    }
}

export const removeCart = async (id) => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/cart/remove`, {id}) ;

        return res.data;
    } catch (err) {
        console.log(err) ;
    }
}
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
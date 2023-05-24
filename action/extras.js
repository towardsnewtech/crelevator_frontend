import axios from "axios";
import { SERVER_URL } from "../config";

export const getFaqs = async () => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/extras/faq/get`) ;

        return res.data ;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const getPdfs = async () => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/extras/pdf/get`) ;

        return res.data ;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const getVideos = async () => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/extras/video/get`) ;

        return res.data ;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const getNews = async () => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/extras/news/get`) ;

        return res.data ;
    } catch(err) {
        console.log(err) ;
        return ;
    }
}

export const submitQuote = async (data) => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/extras/quote-request`, data) ;

        return res.data;
    } catch (error) {
        console.log(error);
        return ;
    }
}

export const submitCRES = async (data) => {
    try {
        let res = await axios.post(`${SERVER_URL}/api/extras/cres`, data) ;

        return res.data;
    } catch (error) {
        console.log(error);
        return ;
    }
}
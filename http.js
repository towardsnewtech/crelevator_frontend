import axios from "axios";

const axios_interceptor = () => {
    axios.interceptors.request.use((config) => {
        config.headers.authorization = `bearer ${localStorage.getItem('token')}`;
        return config;
    });
}

export default axios_interceptor;
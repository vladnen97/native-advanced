import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'e8a0edb1';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?apikey=${key}&t=${title}`).then(res => res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?apikey=${key}&t=${title}&type=${type}`).then(res => res.data)
    }
};


export default API;

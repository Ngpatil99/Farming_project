import axios from 'axios';
import React from 'react';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/farming",
});

axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
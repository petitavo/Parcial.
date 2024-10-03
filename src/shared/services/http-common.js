/**
 * @summary Common HTTP configuration using Axios
 * @description This file sets up an Axios instance with common configuration for API requests
 * @author Gustavo Huanca
 */

import axios from "axios";

/**
 * API base URL
 * @type {string} API_BASE_URL - The base URL for the API
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Axios instance
 * @type {axios.AxiosInstance} http - Axios instance with base URL and default headers
 */
const http = axios.create({
    baseURL: API_BASE_URL
});

// Set default headers
http.defaults.headers.common["Content-Type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default http;
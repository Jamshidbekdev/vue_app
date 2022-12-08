import { isAuthentificated, token, useRefreshToken } from "@/composables/auth";
import router from "@/router";
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept-Language": sessionStorage.getItem('lang') || 'ru',
    // },
});

export default instance;
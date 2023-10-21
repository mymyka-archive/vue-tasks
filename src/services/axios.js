import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://moviesdatabase.p.rapidapi.com",
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'a439a3b7bfmsh3b1e97a441f08c0p1f2ca2jsn857f8bb72aff',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },
});

export default axiosInstance;
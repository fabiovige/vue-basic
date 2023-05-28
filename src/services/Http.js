import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://api-laravel.test/api/v1",
    headers:{
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer 5|zhQjpxuRiYXmiUCLMjmXgZtKjdRQ92VWagwUQdRy"
    }
});

export default axiosInstance;
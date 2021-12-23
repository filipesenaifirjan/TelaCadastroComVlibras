import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/swagger-ui.html/api"
})

export default api;
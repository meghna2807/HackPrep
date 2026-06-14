import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api"
});

const getIdeas = (data) => {
    return API.post("/ideas/request", data);
};

export default getIdeas;
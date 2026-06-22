import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api"
});

export const getIdeas = (data) => {
    return API.post("/ideas/request", data);
};

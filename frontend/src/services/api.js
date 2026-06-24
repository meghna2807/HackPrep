import axios from "axios";

const baseURL =  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? "http://localhost:3000/api" : "/api";

const API = axios.create({
    baseURL: baseURL,
    headers: {"Content-Type": "application/json",},
});

export async function getIdeas(data){
    return API.post("/ideas/request", data);
}
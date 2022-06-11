import axios from "axios";

const baseUrl = "http://localhost:8080"

const api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
})

export async function saveOrUpdate(moto) {
    try {
        return await api.post("/motos", JSON.stringify(moto));
      } catch (error) {
        return error;
      }
}

export async function getAllData() {
    return await api.get("/motos");
}

export async function deleteById(id) {
    return await api.delete(`/motos/${id}`);
}

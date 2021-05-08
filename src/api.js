import axios from "axios";

const baseURL =
  "https://outside-in-dev-api.herokuapp.com/1cS9nLecm2I4gaB5engW6KSG2qjbmn4g";

const client = axios.create({ baseURL });

const api = {
  loadRestaurants: () =>
    client.get("/restaurants").then((response) => response.data),
};

export default api;

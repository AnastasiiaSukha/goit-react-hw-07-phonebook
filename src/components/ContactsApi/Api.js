import axios from "axios";

const contactsList = axios.create({
    baseURL: "https://6363d0957b209ece0f38418a.mockapi.io/contacts",
});

export const getContacts = async() => {
    const {data} = await contactsList.get("/");
    return data;
}

export const newContact = async(data) => {
    const {data: result} = await contactsList.post("/", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await contactsList.delete(`/${id}`);
    return data;
}
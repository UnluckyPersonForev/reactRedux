import axios from "axios";

axios.defaults.baseURL = "https://6866678d89803950dbb28f32.mockapi.io/api/v1";

export const getContacts = async () => {
    const data = await axios.get("/contacts");
    return data;
};

export const addContacts = async (contact) => {
    const data = await axios.post("/contacts", contact);
    return data;
};

export const deleteContacts = async (id) => {
    const data = await axios.delete(`/contacts${id}`);
    return data;
};

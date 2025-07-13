import axios from "axios";

axios.defaults.baseURL = "https://6866678d89803950dbb28f32.mockapi.io/api/v1";

export const getContacts = async () => {
    const response = await axios.get("/contacts");
    return response.data;
};

export const addContacts = async (contact) => {
    const response = await axios.post("/contacts", contact);
    return response.data;
};

export const deleteContacts = async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
};

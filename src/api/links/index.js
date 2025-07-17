import { axios } from "@/components/lib/axios";

export const getLinks = async (id) => {
    const response = await axios.get(`/user-link/${id}`);
    return response.data;

};

export const addLinks = async (data) => {
    const response = await axios.post("/user-link", data);
    return response.data;
};
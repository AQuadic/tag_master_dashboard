import { axios } from "@/components/lib/axios";

export const getLinks = async () => {
    const response = await axios.get("/links");
    return response.data;
    
};

export const addLinks = async (data) => {
    const response = await axios.post("/user-link", data);
    return response.data;
    
};
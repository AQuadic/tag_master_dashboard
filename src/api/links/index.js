import { axios } from "@/components/lib/axios";

export const getLinks = async () => {
    const response = await axios.get("/links");
    return response.data;
    
};
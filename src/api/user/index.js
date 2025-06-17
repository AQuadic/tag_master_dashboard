import { axios } from "@/components/lib/axios";

export const updateUser = async (userData) => {
    const response = await axios.post("/user/update", userData);
    return response.data;
};

import { axios } from "@/components/lib/axios";

export const createProfile = async (data) => {
    const response = await axios.post("/dashboard/create-profile", data);
    return response.data;
};

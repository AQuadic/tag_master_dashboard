import { axios } from "@/components/lib/axios";

export const getSubscriptions = async () => {
    const response = await axios.get("/subscriptions");
    return response.data;
};
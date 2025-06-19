import { axios } from "@/components/lib/axios";

export const getSubscriptions = async () => {
    const response = await axios.get("/subscriptions");
    return response.data;
};

export const getCurrentSubscriptions = async () => {
    const response = await axios.get("/subscriptions/current");
    return response.data;
};
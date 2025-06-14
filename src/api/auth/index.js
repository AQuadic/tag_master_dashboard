import { axios } from "@/components/lib/axios";

export const postLogin = async ({ email, password }) => {
    const response = await axios.post("/login", {
        email,
        password,
        password_confirmation: password,
    });
    return response.data;
};

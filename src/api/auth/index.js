import { axios } from "@/components/lib/axios";

export const postLogin = async ({ email, password }) => {
    const response = await axios.post("/user/login", {
        email,
        password,
        password_confirmation: password,
    });
    return response.data;
};


export const postLogout= async () => {
    const response = await axios.post("/logout", {
    });
    return response.data;
};

export const deleteAccount = async () => {
    const response = await axios.post("/logout", {
    });
    return response.data;
};

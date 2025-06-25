import { axios } from "@/components/lib/axios";

export const getEmployees = async (page = 1) => {
    const response = await axios.get("/dashboard/employees", {
        params: {
        page,
        },
    });
    return response.data;
};

export const getEmployeesAnalytics = async () => {
        const response = await axios.get("/dashboard/employees?with_analytics=121");
        return response.data.data || response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`/user-link/${id}`);
    return response.data;
};

import { axios } from "@/components/lib/axios";

export const getEmployees = async () => {
    const response = await axios.get("/dashboard/employees");
    return response.data.data || response.data;
};

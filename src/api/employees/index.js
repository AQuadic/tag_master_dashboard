import { axios } from "@/components/lib/axios";

export const getEmployees = async (page = 1) => {
  const response = await axios.get("/dashboard/employees", {
    params: {
      page,
    },
  });
  return response.data;
};

export const getEmployeesAnalytics = async (page = 1) => {
  const response = await axios.get(`/dashboard/employees?with_analytics=121&page=${page}`);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/dashboard/employees/${id}`);
  return response.data;
};

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

export const deleteUser = async (profile_id) => {
  const formData = new FormData();
  formData.append("profile_id", profile_id);

  const response = await axios.post(
    "/dashboard/delete-profile",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

import { axios } from "@/components/lib/axios";

export const getEmployees = async (page = 1) => {
  const response = await axios.get("/dashboard/employees", {
    params: {
      page,
    },
  });
  return response.data;
};

export const getEmployeesAnalytics = async (
  page = 1,
  startDate = null,
  endDate = null
) => {
  // Format dates to DD-MM-YYYY format
  const formatDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const params = {
    with_analytics: 121,
    page,
  };

  // Add date parameters if provided
  if (startDate && endDate) {
    params.start_date = formatDate(startDate);
    params.end_date = formatDate(endDate);
  }

  const response = await axios.get("/dashboard/employees", { params });
  return response.data;
};

export const deleteUser = async (profile_id) => {
  const formData = new FormData();
  formData.append("profile_id", profile_id);

  const response = await axios.post("/dashboard/delete-profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

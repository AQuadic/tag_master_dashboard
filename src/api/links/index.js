import { axios } from "@/components/lib/axios";
import Cookies from "js-cookie";

export const getLinks = async () => {
  const profile_id = Cookies.get("profile_id");
  const response = await axios.get("/user-link", {
    params: { profile_id },
  });
  return response.data;
};

export const addLinks = async (data) => {
  const response = await axios.post("/user-link", data);
  return response.data;
};


export const editLinks = async (id, data) => {
  const formData = new FormData();
  for (const key in data) {
    if (data[key] !== undefined && data[key] !== null) {
      formData.append(key, data[key]);
    }
  }
  const response = await axios.post(`/user-link/${id}`, formData);
  return response.data;
};
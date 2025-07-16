import { axios } from "@/components/lib/axios";

export const getProducts = async (page = 1) => {
  const response = await axios.get(`/products?page=${page}`);
  return response;
};
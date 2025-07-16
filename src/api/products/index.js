import { axios } from "@/components/lib/axios";

export const getProducts = async (page = 1) => {
  const response = await axios.get(`/products?page=${page}`);
  console.log("PRODUCTS RESPONSE IS:", response);
  return response;
};
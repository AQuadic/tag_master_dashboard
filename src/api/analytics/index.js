import { axios } from "@/components/lib/axios";

export const getAnalytics = async () => {
  try {
    const response = await axios.get("/analytics", {
      params: {
        start_date: '20-6-2025',
        end_date: '23-6-2025',
        type: 'view',
        analytics_type: 'profile',
        analytics_id: '11'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    throw error;
  }
};

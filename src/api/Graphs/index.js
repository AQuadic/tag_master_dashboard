import { axios } from "@/components/lib/axios";

export const getGraph = async (startDate = null, endDate = null) => {
  try {
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
      type: "view",
      analytics_type: "profile",
      analytics_id: "11",
    };

    // Add date parameters if provided
    if (startDate && endDate) {
      params.start_date = formatDate(startDate);
      params.end_date = formatDate(endDate);
    } else {
      // Default dates if none provided
      params.start_date = "20-6-2025";
      params.end_date = "23-6-2025";
    }

    const response = await axios.get("/analytics/graph", {
      params,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching graph data:", error);
    throw error;
  }
};

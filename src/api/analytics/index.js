import { axios } from "@/components/lib/axios";

export const getAnalytics = async (startDate = null, endDate = null) => {
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

    const baseParams = {
      analytics_type: "profile",
      analytics_id: "11",
    };

    // Add date parameters if provided
    if (startDate && endDate) {
      baseParams.start_date = formatDate(startDate);
      baseParams.end_date = formatDate(endDate);
    } else {
      // Default dates if none provided
      baseParams.start_date = "20-6-2025";
      baseParams.end_date = "23-6-2025";
    }

    // Make parallel requests for view and click data
    const [viewResponse, clickResponse] = await Promise.all([
      axios.get("/analytics", { params: { ...baseParams, type: "view" } }),
      axios.get("/analytics", { params: { ...baseParams, type: "click" } }),
    ]);

    return {
      view: viewResponse.data.view || viewResponse.data,
      click: clickResponse.data.click || clickResponse.data,
    };
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    throw error;
  }
};

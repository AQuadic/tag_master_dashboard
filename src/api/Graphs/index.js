import { axios } from "@/components/lib/axios";

export const getGraph = async () => {
    try {
        const response = await axios.get("/analytics/graph", {
            params: {
                start_date: '20-6-2025',
                end_date: '23-6-2025',
                type: 'view',
                analytics_type: 'profile',
                analytics_id: '11'
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

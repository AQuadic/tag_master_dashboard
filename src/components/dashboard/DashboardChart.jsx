import { getGraph } from "@/api/Graphs";
import { useQuery } from "react-query";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Spinner from "../icons/general/Spinner";

const DashboardChart = ({ startDate, endDate, filterType = "weekly" }) => {
  const { data: GraphData, isLoading } = useQuery({
    queryKey: ["GraphData", startDate, endDate],
    queryFn: () => getGraph(startDate, endDate),
    enabled: !!startDate && !!endDate,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );

  return (
    <div className="w-full">
      <div className="w-full h-64 max-w-4xl mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={GraphData?.view?.trend?.this || []}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, "auto"]}
            />
            <Line
              type="monotone"
              dataKey="aggregate"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-[29px] h-[13px] bg-blue-500 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Views</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[29px] h-[13px] bg-purple-500 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Clicks</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;

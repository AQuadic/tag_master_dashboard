import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { day: 'SA', views: 250, clicks: 250 },
    { day: 'SU', views: 1500, clicks: 150 },
    { day: 'MO', views: 800, clicks: 500 },
    { day: 'TU', views: 2200, clicks: 800 },
    { day: 'WE', views: 300, clicks: 1800 },
    { day: 'TH', views: 400, clicks: 2000 },
    { day: 'FR', views: 2800, clicks: 1600 }
];

const DashboardChart = () => {
    return (
        <div className="">
            <div className="h-[331px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6b7280' }}
                            domain={[0, 3000]}
                        />
                        <Line
                            type="monotone"
                            dataKey="views"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ fill: '#3b82f6', strokeWidth: 6, r: 4 }}
                            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="clicks"
                            stroke="#a855f7"
                            strokeWidth={2}
                            dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#a855f7', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-6 mx-14">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-[29px] h-[13px] bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-[29px] h-[13px] bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Clicks</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardChart;
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getPerformanceText } from "../lib/skillTestHelpers";

export default function ComparisonGraph({ percentile, score, graphData }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
      <p className="text-gray-500 mb-6">
        {getPerformanceText(percentile, score).comparisonText}
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666" }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#666" }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: "#4F46E5", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

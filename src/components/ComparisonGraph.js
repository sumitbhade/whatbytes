import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ComparisonGraph({ percentile }) {
  const initialData = [
    { percentile: 0, students: 1 },
    { percentile: 15, students: 2 },
    { percentile: 25, students: 3 },
    { percentile: 35, students: 4 },
    { percentile: 45, students: 6 },
    { percentile: 50, students: 8 },
    { percentile: 65, students: 7 },
    { percentile: 75, students: 5 },
    { percentile: 85, students: 3 },
    { percentile: 95, students: 2 },
    { percentile: 100, students: 1 },
  ];

  const [graphData, setGraphData] = useState(initialData);
  const [showUserTooltip, setShowUserTooltip] = useState(false);

  useEffect(() => {
    const newData = graphData.map((point) => {
      if (Math.abs(point.percentile - percentile) <= 5) {
        return { ...point, students: point.students + 1 };
      }
      return point;
    });
    setGraphData(newData);
  }, [percentile]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200 text-sm">
          <div className="text-gray-600">{data.percentile} percentile</div>
          <div className="text-purple-600">
            numberOfStudent : {data.students}
          </div>
        </div>
      );
    }
    return null;
  };

  const UserPercentileTooltip = () => {
    const closestPoint = graphData.reduce((prev, curr) => {
      return Math.abs(curr.percentile - percentile) <
        Math.abs(prev.percentile - percentile)
        ? curr
        : prev;
    });

    return (
      <div
        className={`absolute bg-white p-3 shadow-lg rounded-lg border border-gray-200 text-sm transform -translate-x-1/2 transition-all duration-200 ${
          showUserTooltip
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
        style={{
          left: `${percentile}%`,
          bottom: "70px",
          zIndex: 20,
          minWidth: "150px",
        }}
      >
        <div className="font-medium text-gray-800 mb-1">Your Position</div>
        <div className="text-gray-600">{percentile} percentile</div>
        <div className="text-purple-600 mt-1">
          numberOfStudent : {closestPoint.students}
        </div>
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45" />
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
      <p className="text-gray-600 mb-6">
        You scored {percentile}% percentile which is{" "}
        {percentile > 72 ? "higher" : "lower"} than the average percentile 72%
        of all the engineers who took this assessment.
      </p>

      <div className="h-[400px] w-full relative">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />

        <UserPercentileTooltip />

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={graphData}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <XAxis
              dataKey="percentile"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666" }}
              domain={[0, 100]}
              type="number"
              ticks={[0, 25, 50, 75, 100]}
            />
            <YAxis
              dataKey="students"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666" }}
              domain={[0, "dataMax"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ fill: "#6366F1", r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Enhanced interactive overlay */}
        <div
          className="absolute h-full w-[2px] cursor-pointer group"
          style={{
            left: `${percentile}%`,
            transform: "translateX(-50%)",
            top: 0,
            zIndex: 15,
          }}
          onMouseEnter={() => setShowUserTooltip(true)}
          onMouseLeave={() => setShowUserTooltip(false)}
        >
          {/* Vertical line with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-500/10 group-hover:from-blue-500/40 group-hover:to-blue-500/30 transition-all duration-200" />

          {/* Center line */}
          <div className="absolute inset-0 w-[2px] left-0 bg-blue-500/30 group-hover:bg-blue-500 transition-colors duration-200" />

          {/* Bottom label */}
          <div className="absolute text-gray-500 text-sm whitespace-nowrap bottom-1 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-white/80 backdrop-blur-sm transition-all duration-200 group-hover:text-blue-600 group-hover:font-medium">
            your percentile
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Total students:{" "}
        {graphData.reduce((sum, point) => sum + point.students, 0)}
      </div>
    </div>
  );
}

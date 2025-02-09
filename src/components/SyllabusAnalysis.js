import { Progress } from "./ui/progress";

export default function SyllabusAnalysis() {
  const syllabusData = [
    { name: "HTML Tools, Forms, History", value: 80, color: "blue" },
    { name: "Tags & References in HTML", value: 60, color: "orange" },
    { name: "Tables & References in HTML", value: 24, color: "red" },
    { name: "Tables & CSS Basics", value: 96, color: "green" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Syllabus Wise Analysis</h2>
      <div className="space-y-6">
        {syllabusData.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm">{item.name}</span>
              <span className={`text-${item.color}-500 text-sm font-medium`}>
                {item.value}%
              </span>
            </div>
            <Progress value={item.value} variant={item.color} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

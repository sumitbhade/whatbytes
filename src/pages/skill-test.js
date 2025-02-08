import { useState } from "react";
import { Progress } from "../components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CircularProgress from "../components/CircularProgress";
import UpdateScoreModal from "../components/UpdateScoreModal";

export default function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scores, setScores] = useState({
    rank: 4,
    percentile: 90,
    score: 12,
  });
  const getPerformanceText = (percentile, score) => {
    // For Comparison Graph text
    let comparisonText = "";
    if (percentile > 72) {
      comparisonText = `You scored ${percentile}% percentile which is higher than the average percentile 72% of all the engineers who took this assessment`;
    } else if (percentile < 72) {
      comparisonText = `You scored ${percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment`;
    } else {
      comparisonText = `You scored ${percentile}% percentile which is equal to the average percentile of all the engineers who took this assessment`;
    }

    // For Question Analysis text
    let analysisText = "";
    const scorePercentage = (score / 15) * 100;

    if (scorePercentage >= 90) {
      analysisText = `Excellent! You scored ${score} questions correct out of 15. Keep up the great work!`;
    } else if (scorePercentage >= 75) {
      analysisText = `Good job! You scored ${score} questions correct out of 15. You're doing well!`;
    } else if (scorePercentage >= 50) {
      analysisText = `You scored ${score} questions correct out of 15. There's room for improvement.`;
    } else {
      analysisText = `You scored ${score} questions correct out of 15. We recommend practicing more to improve your score.`;
    }

    return { comparisonText, analysisText };
  };

  const generateGraphData = (percentile) => {
    return [
      { name: "0", value: 20 },
      { name: "20", value: 40 },
      { name: "40", value: 80 },
      { name: "60", value: 100 },
      { name: "80", value: 60 },
      { name: "100", value: percentile },
    ];
  };

  const [graphData, setGraphData] = useState(
    generateGraphData(scores.percentile)
  );

  const handleUpdateScores = (newScores) => {
    setScores(newScores);
    setGraphData(generateGraphData(newScores.percentile));
  };

  return (
    <div>
      {/* Page Heading */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-medium text-gray-700">Skill Test</h1>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/html5-logo.svg"
                    alt="HTML5"
                    className="w-16 h-16"
                  />
                  <div>
                    <h1 className="text-xl font-bold">
                      Hyper Text Markup Language
                    </h1>
                    <p className="text-gray-600">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-2 rounded-md self-end md:self-auto"
                >
                  Update
                </button>
              </div>
            </div>

            {/* Quick Statistics */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Quick Statistics</h2>
              <div className="grid grid-cols-3 gap-8">
                {/* Rank */}
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-50 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 15h3v6H7v-6zm7-11h3v17h-3V4zm-7 7h3v10H7v-10z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">
                      {scores.rank}
                    </div>
                    <div className="text-gray-600 text-sm">YOUR RANK</div>
                  </div>
                </div>

                {/* Percentile */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 8v8m0 0l-3-3m3 3l3-3M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">
                      {scores.percentile}%
                    </div>
                    <div className="text-gray-600 text-sm">PERCENTILE</div>
                  </div>
                </div>

                {/* Correct Answers */}
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">
                      {scores.score}/15
                    </div>
                    <div className="text-gray-600 text-sm">CORRECT ANSWERS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Graph */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Comparison Graph</h2>
              <p className="text-gray-500 mb-6">
                {
                  getPerformanceText(scores.percentile, scores.score)
                    .comparisonText
                }
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
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#666" }}
                    />
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
          </div>

          {/* Sidebar Content - Takes up 1 column */}
          <div className="space-y-6">
            {/* Syllabus Wise Analysis */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-6">
                Syllabus Wise Analysis
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">HTML Tools, Forms, History</span>
                    <span className="text-blue-600 text-sm font-medium">
                      80%
                    </span>
                  </div>
                  <Progress value={80} variant="blue" className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Tags & References in HTML</span>
                    <span className="text-orange-500 text-sm font-medium">
                      60%
                    </span>
                  </div>
                  <Progress value={60} variant="orange" className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Tables & References in HTML</span>
                    <span className="text-red-500 text-sm font-medium">
                      24%
                    </span>
                  </div>
                  <Progress value={24} variant="red" className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Tables & CSS Basics</span>
                    <span className="text-green-500 text-sm font-medium">
                      96%
                    </span>
                  </div>
                  <Progress value={96} variant="green" className="h-2" />
                </div>
              </div>
            </div>

            {/* Question Analysis */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Question Analysis</h2>
                  <div className="text-blue-600 text-xl font-bold">
                    {scores.score}/15
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="flex-1">
                    <p className="text-gray-600 text-base mb-8">
                      {
                        getPerformanceText(scores.percentile, scores.score)
                          .analysisText
                      }
                    </p>

                    {/* Target pointer section */}
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 rounded-full p-2">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">
                        your percentile
                      </span>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="flex-shrink-0">
                    <CircularProgress value={scores.score} total={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Scores Modal */}
      <UpdateScoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateScores}
        currentScores={scores}
      />
    </div>
  );
}

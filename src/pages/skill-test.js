import { useState } from "react";
import { Progress } from "../components/ui/progress";
import CircularProgress from "../components/CircularProgress";
import UpdateScoreModal from "../components/UpdateScoreModal";
import ComparisonGraph from "../components/ComparisonGraph";
import SkillTestHeader from "../components/SkillTestHeader";

export default function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scores, setScores] = useState({
    rank: 4,
    percentile: 90,
    score: 12,
  });

  const handleUpdateScores = (newScores) => {
    setScores(newScores);
  };

  const syllabusData = [
    { name: "HTML Tools, Forms, History", value: 80, color: "blue" },
    { name: "Tags & References in HTML", value: 60, color: "orange" },
    { name: "Tables & References in HTML", value: 24, color: "red" },
    { name: "Tables & CSS Basics", value: 96, color: "green" },
  ];

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
            <SkillTestHeader onUpdateClick={() => setIsModalOpen(true)} />

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
            <ComparisonGraph percentile={scores.percentile} />
          </div>

          {/* Sidebar Content - Takes up 1 column */}
          <div className="space-y-6">
            {/* Syllabus Analysis */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-6">
                Syllabus Wise Analysis
              </h2>
              <div className="space-y-6">
                {syllabusData.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{item.name}</span>
                      <span
                        className={`text-${item.color}-500 text-sm font-medium`}
                      >
                        {item.value}%
                      </span>
                    </div>
                    <Progress
                      value={item.value}
                      variant={item.color}
                      className="h-2"
                    />
                  </div>
                ))}
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
                      You scored {scores.score} question correct out of 15.
                      However it still needs some improvements
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 rounded-full p-2">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
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

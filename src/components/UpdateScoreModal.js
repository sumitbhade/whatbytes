import { useState } from "react";

export default function UpdateScoreModal({
  isOpen,
  onClose,
  onUpdate,
  currentScores,
}) {
  const [rank, setRank] = useState(currentScores.rank);
  const [percentile, setPercentile] = useState(currentScores.percentile);
  const [score, setScore] = useState(currentScores.score);

  // Validation states
  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const validateRank = (value) => {
    if (value <= 0) {
      return "Rank must be greater than 0";
    }
    return "";
  };

  const validatePercentile = (value) => {
    if (value < 0 || value > 100) {
      return "Percentile must be between 0-100";
    }
    return "";
  };

  const validateScore = (value) => {
    if (value < 0) {
      return "Score cannot be negative";
    }
    if (value > 15) {
      return "Score cannot exceed 15";
    }
    return "";
  };

  const handleRankChange = (e) => {
    const value = Number(e.target.value);
    setRank(value);
    setErrors((prev) => ({
      ...prev,
      rank: validateRank(value),
    }));
  };

  const handlePercentileChange = (e) => {
    const value = Number(e.target.value);
    setPercentile(value);
    setErrors((prev) => ({
      ...prev,
      percentile: validatePercentile(value),
    }));
  };

  const handleScoreChange = (e) => {
    const value = Number(e.target.value);
    setScore(value);
    setErrors((prev) => ({
      ...prev,
      score: validateScore(value),
    }));
  };

  const handleBlur = (field) => {
    switch (field) {
      case "rank":
        setErrors((prev) => ({
          ...prev,
          rank: validateRank(rank),
        }));
        break;
      case "percentile":
        setErrors((prev) => ({
          ...prev,
          percentile: validatePercentile(percentile),
        }));
        break;
      case "score":
        setErrors((prev) => ({
          ...prev,
          score: validateScore(score),
        }));
        break;
    }
  };

  const handleSubmit = () => {
    // Validate all fields before submission
    const rankError = validateRank(rank);
    const percentileError = validatePercentile(percentile);
    const scoreError = validateScore(score);

    setErrors({
      rank: rankError,
      percentile: percentileError,
      score: scoreError,
    });

    if (rankError || percentileError || scoreError) {
      return;
    }

    onUpdate({
      rank,
      percentile,
      score,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update scores</h2>
          <img src="/html5-logo.svg" alt="HTML5" className="w-12 h-12" />
        </div>

        <div className="space-y-6">
          {/* Rank Input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                1
              </div>
              <span>Update your Rank</span>
            </div>
            <input
              type="number"
              value={rank}
              onChange={handleRankChange}
              onBlur={() => handleBlur("rank")}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.rank ? "border-red-500" : ""
              }`}
            />
            {errors.rank && (
              <p className="text-red-500 text-sm">{errors.rank}</p>
            )}
          </div>

          {/* Percentile Input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                2
              </div>
              <span>Update your Percentile</span>
            </div>
            <input
              type="number"
              value={percentile}
              onChange={handlePercentileChange}
              onBlur={() => handleBlur("percentile")}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.percentile ? "border-red-500" : ""
              }`}
            />
            {errors.percentile && (
              <p className="text-red-500 text-sm">
                required | percentile 0-100
              </p>
            )}
          </div>

          {/* Score Input */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                3
              </div>
              <span>Update your Current Score (out of 15)</span>
            </div>
            <input
              type="number"
              value={score}
              onChange={handleScoreChange}
              onBlur={() => handleBlur("score")}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.score ? "border-red-500" : ""
              }`}
            />
            {errors.score && (
              <p className="text-red-500 text-sm">{errors.score}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-lg hover:bg-gray-50"
          >
            cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            save
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

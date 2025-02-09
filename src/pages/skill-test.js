import { useState } from "react";
import { Progress } from "../components/ui/progress";
import CircularProgress from "../components/CircularProgress";
import UpdateScoreModal from "../components/UpdateScoreModal";
import ComparisonGraph from "../components/ComparisonGraph";
import SkillTestHeader from "../components/SkillTestHeader";
import QuickStatistics from "../components/QuickStatistics";
import QuestionAnalysis from "../components/QuestionAnalysis";
import SyllabusAnalysis from "../components/SyllabusAnalysis";

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

  return (
    <div>
      {/* Page Heading */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-medium text-gray-700">Skill Test</h1>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Changed to flex-col for mobile-first design */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="order-1 lg:order-none lg:col-span-2 space-y-6">
            <SkillTestHeader onUpdateClick={() => setIsModalOpen(true)} />
            <QuickStatistics scores={scores} />
            <ComparisonGraph percentile={scores.percentile} />
          </div>

          {/* Analysis Section - Will appear at bottom on mobile */}
          <div className="order-2 lg:order-none space-y-6">
            <SyllabusAnalysis />
            <QuestionAnalysis score={scores.score} />
          </div>
        </div>
      </div>

      <UpdateScoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateScores}
        currentScores={scores}
      />
    </div>
  );
}

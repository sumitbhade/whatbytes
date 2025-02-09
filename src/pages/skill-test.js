import { useState } from "react";
import SkillTestHeader from "../components/SkillTestHeader";
import QuickStatistics from "../components/QuickStatistics";
import ComparisonGraph from "../components/ComparisonGraph";
import SyllabusAnalysis from "../components/SyllabusAnalysis";
import QuestionAnalysis from "../components/QuestionAnalysis";
import UpdateScoreModal from "../components/UpdateScoreModal";
import { generateGraphData } from "../lib/skillTestHelpers";

export default function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scores, setScores] = useState({
    rank: 4,
    percentile: 90,
    score: 12,
  });

  const [graphData, setGraphData] = useState(
    generateGraphData(scores.percentile)
  );

  const handleUpdateScores = (newScores) => {
    setScores(newScores);
    setGraphData(generateGraphData(newScores.percentile));
  };

  return (
    <div>
      <div className="p-6 border-b">
        <h1 className="text-xl font-medium text-gray-700">Skill Test</h1>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SkillTestHeader onUpdateClick={() => setIsModalOpen(true)} />
            <QuickStatistics scores={scores} />
            <ComparisonGraph
              percentile={scores.percentile}
              score={scores.score}
              graphData={graphData}
            />
          </div>

          <div className="space-y-6">
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

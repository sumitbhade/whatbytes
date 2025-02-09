import CircularProgress from "./CircularProgress";
import { getPerformanceText } from "../lib/skillTestHelpers";

export default function QuestionAnalysis({ score }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Question Analysis</h2>
          <div className="text-blue-600 text-xl font-bold">{score}/15</div>
        </div>

        <div className="flex items-start gap-8">
          <div className="flex-1">
            <p className="text-gray-600 text-base mb-8">
              {getPerformanceText(0, score).analysisText}
            </p>

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
              <span className="text-gray-600 text-sm">your percentile</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <CircularProgress value={score} total={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

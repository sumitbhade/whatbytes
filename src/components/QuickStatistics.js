export default function QuickStatistics({ scores }) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Quick Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Rank */}
        <StatItem
          icon={
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
          }
          value={scores.rank}
          label="YOUR RANK"
          bgColor="bg-yellow-50"
          textColor="text-yellow-600"
        />

        {/* Percentile */}
        <StatItem
          icon={
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
          }
          value={`${scores.percentile}%`}
          label="PERCENTILE"
          bgColor="bg-blue-50"
          textColor="text-blue-600"
        />

        {/* Score */}
        <StatItem
          icon={
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
          }
          value={`${scores.score}/15`}
          label="CORRECT ANSWERS"
          bgColor="bg-green-50"
          textColor="text-green-600"
        />
      </div>
    </div>
  );
}

const StatItem = ({ icon, value, label, bgColor }) => (
  <div className="flex items-center gap-4">
    <div className={`${bgColor} p-3 rounded-full shrink-0`}>{icon}</div>
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-blue-600">
        {value}
      </div>
      <div className="text-gray-600 text-xs sm:text-sm">{label}</div>
    </div>
  </div>
);

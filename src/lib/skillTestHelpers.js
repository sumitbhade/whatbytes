export const getPerformanceText = (percentile, score) => {
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

export const generateGraphData = (percentile) => {
  return [
    { name: "0", value: 20 },
    { name: "20", value: 40 },
    { name: "40", value: 80 },
    { name: "60", value: 100 },
    { name: "80", value: 60 },
    { name: "100", value: percentile },
  ];
};

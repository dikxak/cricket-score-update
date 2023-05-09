import { useSelector } from "react-redux";

const TotalScore = () => {
  const totalRuns = useSelector(state => state.score.totalRuns);
  const wicketCount = useSelector(state => state.score.wicketCount);

  return (
    <div className="total-score-container">
      <h2 className="secondary-heading">Total Score</h2>
      <p className="total-score">
        {totalRuns} - {wicketCount}
      </p>
    </div>
  );
};

export default TotalScore;

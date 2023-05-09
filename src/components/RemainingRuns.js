import { useSelector } from "react-redux";

const RemainingRuns = () => {
  const runsToWin = useSelector(state => state.score.runsToWin);

  return (
    <div className="remaining-runs-container">
      <h2 className="secondary-heading">To Win</h2>
      <div className="remaining-runs">
        <span>{runsToWin}</span> <span>Runs</span>
      </div>
    </div>
  );
};

export default RemainingRuns;

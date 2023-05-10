import { useSelector } from "react-redux";

const RemainingBalls = () => {
  const ballsLeft = useSelector(state => state.score.ballsLeft);

  return (
    <div className="remaining-container remaining-balls-container">
      <h2 className="secondary-heading">From</h2>
      <div className="remaining remaining-balls">
        <span>{ballsLeft}</span> <span>Balls</span>
      </div>
    </div>
  );
};

export default RemainingBalls;

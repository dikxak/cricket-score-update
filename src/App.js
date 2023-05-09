import ScoreForm from "./components/ScoreForm";
import TotalScore from "./components/TotalScore";
import RemainingRuns from "./components/RemainingRuns";
import RemainingBalls from "./components/RemainingBalls";

const App = () => {
  return (
    <div className="container">
      <ScoreForm />
      <TotalScore />
      <RemainingRuns />
      <RemainingBalls />
    </div>
  );
};

export default App;

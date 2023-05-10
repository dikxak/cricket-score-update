import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { scoreActions } from "../store/score";

const WICKET = {
  YES: "yes",
  NO: "no",
};

const isInputValid = value => value.trim().length;

const ScoreForm = () => {
  const dispatch = useDispatch();
  const runsToWin = useSelector(state => state.score.runsToWin);
  const wicketCount = useSelector(state => state.score.wicketCount);
  const ballsLeft = useSelector(state => state.score.ballsLeft);

  const [runs, setRuns] = useState(0);
  const [wicket, setWicket] = useState(WICKET.NO);

  const runsChangeHandler = e => {
    const runs = e.target.value;

    if (isInputValid(runs)) setRuns(+runs);
  };

  const wicketChangeHandler = e => {
    const wicket = e.target.value;

    if (isInputValid(wicket)) setWicket(wicket);
  };

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!runs && wicket === WICKET.NO) dispatch(scoreActions.updateBalls());

    if (runs && wicket === WICKET.NO) dispatch(scoreActions.updateRuns(runs));

    if (wicket === WICKET.YES && !runs) dispatch(scoreActions.updateWicket());

    if (runs && wicket === WICKET.YES)
      dispatch(scoreActions.updateRunsAndWicket(runs));
  };

  const isSubmitBtnDisabled =
    runsToWin <= 0 || wicketCount === 10 || ballsLeft === 0;

  return (
    <div className="score-form-container">
      <h2 className="secondary-heading">Update Game State</h2>
      <form className="score-form" onSubmit={formSubmitHandler}>
        <div className="score-input-container">
          <div className="run-scored-input">
            <label>Run Scored</label>
            <input
              onChange={runsChangeHandler}
              type="number"
              min="0"
              max="6"
              value={runs}
            />
          </div>

          <div
            className="wicket-status-container"
            onChange={wicketChangeHandler}
          >
            <p>Wicket</p>
            <div className="wicket-status-input">
              <div>
                <input type="radio" id="yes" name="wicket-status" value="yes" />
                <label htmlFor="yes">Yes</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="no"
                  name="wicket-status"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={isSubmitBtnDisabled}
          className="btn btn-primary"
          type="submit"
        >
          Update Score
        </button>
      </form>
    </div>
  );
};

export default ScoreForm;

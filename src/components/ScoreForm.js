import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { scoreActions } from "../store/score";

const isInputValid = value => value.trim().length;

const ScoreForm = () => {
  const dispatch = useDispatch();

  const [runs, setRuns] = useState(0);
  const [wicket, setWicket] = useState("no");

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

    if (!runs && wicket === "no") dispatch(scoreActions.updateBalls());

    if (runs && wicket === "no") dispatch(scoreActions.updateRuns(runs));

    if (wicket === "yes" && !runs) dispatch(scoreActions.updateWicket());

    if (runs && wicket === "yes")
      dispatch(scoreActions.updateRunsAndWicket(runs));
  };

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

        <button className="btn btn-primary" type="submit">
          Update Score
        </button>
      </form>
    </div>
  );
};

export default ScoreForm;

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_SCORE = {
  TOTAL_RUNS: 150,
  RUNS_TO_WIN: 50,
  BALLS_LEFT: 24,
  WICKET_COUNT: 3,
};

const INITIAL_SCORE_STATE = {
  totalRuns: INITIAL_SCORE.TOTAL_RUNS,
  runsToWin: INITIAL_SCORE.RUNS_TO_WIN,
  ballsLeft: INITIAL_SCORE.BALLS_LEFT,
  wicketCount: INITIAL_SCORE.WICKET_COUNT,
};

const scoreSlice = createSlice({
  name: "score",
  initialState: INITIAL_SCORE_STATE,
  reducers: {
    updateBalls(state) {
      state.ballsLeft--;
    },

    updateRuns(state, action) {
      state.totalRuns += action.payload;
      state.runsToWin -= action.payload;
      state.ballsLeft--;
    },

    updateWicket(state) {
      state.wicketCount++;
      state.ballsLeft--;
    },

    updateRunsAndWicket(state, action) {
      state.totalRuns += action.payload;
      state.runsToWin -= action.payload;
      state.wicketCount++;
      state.ballsLeft--;
    },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;

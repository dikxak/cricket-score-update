import { createSlice } from "@reduxjs/toolkit";

const INITIAL_SCORE_STATE = {
  totalRuns: 0,
  runsToWin: 0,
  ballsLeft: 0,
  wicketCount: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState: INITIAL_SCORE_STATE,
  reducers: {
    updateRuns(state, action) {
      state.totalRuns += action.payload;
      state.runsToWin -= action.payload;
      state.ballsLeft--;
    },

    updateWicket(state) {
      state.wicketCount++;
      state.ballsLeft--;
    },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;

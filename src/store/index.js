import { configureStore } from "@reduxjs/toolkit";

import scoreReducer from "./score";

const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});

export default store;

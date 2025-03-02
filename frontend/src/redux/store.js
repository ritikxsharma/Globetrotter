import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";
import { challengeReducer } from "./challengeSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    challenge: challengeReducer,
  },
});

export default store;

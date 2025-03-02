import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  challenger: null, // Stores challenger details
  challengeOpen: false, // Controls Invite Modal
  countdownOpen: false, // Controls Countdown Modal
  countdown: 3, // Countdown state
};

const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    setChallenger: (state, action) => {
      state.challenger = action.payload;
      state.challengeOpen = true;
    },
    acceptChallenge: (state) => {
      state.challengeOpen = false;
      state.countdownOpen = true;
      state.countdown = 3;
    },
    updateCountdown: (state, action) => {
      state.countdown = action.payload;
    },
    startGame: (state) => {
      state.countdownOpen = false;
    },
    resetChallenge: (state) => {
      return initialState; // Reset everything
    },
  },
});

export const {
  setChallenger,
  acceptChallenge,
  updateCountdown,
  startGame,
  resetChallenge,
} = challengeSlice.actions;

export const challengeReducer = challengeSlice.reducer;

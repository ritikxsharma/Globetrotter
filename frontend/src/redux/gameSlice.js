import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRandomQuestion } from "../axios/apiClient";

export const fetchNewQuestion = createAsyncThunk(
  "game/fetchNewQuestion",
  async () => {
    const response = await getRandomQuestion();
    return response.data;
  }
);

const initialState = {
  totalTime: 15,
  currentQuestion: null,
  correctAnswers: 0,
  incorrectAnswers: 0,
  selectedAnswer: null,
  showFeedback: false,
  isCorrect: false,
  showConfetti: false,
  timeLeft: 15,
  isLoading: false,
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
      state.isCorrect = action.payload === state.currentQuestion.city;
      state.showFeedback = true;

      if (state.isCorrect) {
        state.correctAnswers += 1;
        state.showConfetti = true;
      } else {
        state.incorrectAnswers += 1;
      }
    },
    resetFeedback: (state) => {
      state.showFeedback = false;
      state.selectedAnswer = null;
      state.isCorrect = false;
      state.showConfetti = false;
    },
    decrementTimer: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.showFeedback = true;
        state.isCorrect = false;
        state.selectedAnswer = null;
        state.incorrectAnswers += 1;
      }
    },
    toggleConfetti: (state, action) => {
      state.showConfetti = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewQuestion.fulfilled, (state, action) => {
        state.currentQuestion = action.payload;
        state.timeLeft = 15;
        state.isLoading = false;
      })
      .addCase(fetchNewQuestion.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { selectAnswer, resetFeedback, decrementTimer, toggleConfetti } =
  slice.actions;

export const gameReducer = slice.reducer;

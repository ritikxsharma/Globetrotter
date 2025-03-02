import React from "react";
import { motion } from "framer-motion";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewQuestion, resetFeedback } from "../redux/gameSlice";

const Feedback = () => {
  const dispatch = useDispatch();
  const { showFeedback, currentQuestion, timeLeft, isCorrect } = useSelector(
    (state) => state.game
  );

  const handleNextQuestion = () => {
    dispatch(resetFeedback());
    dispatch(fetchNewQuestion());
  };

  return (
    <>
      {showFeedback && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="h6" textAlign="center">
              {timeLeft === 0
                ? "⏳ Time ran out!"
                : isCorrect
                ? "🎉 Correct!"
                : "😢 Incorrect!"}
            </Typography>
          </motion.div>
          <Typography textAlign="center">
            Fun fact: {currentQuestion.fun_fact[0]}
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "200px",
              mt: 2,
              p: 2,
              bgcolor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#2E7D32",
                transform: "scale(1.05)",
              },
            }}
            onClick={handleNextQuestion}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
};

export default Feedback;

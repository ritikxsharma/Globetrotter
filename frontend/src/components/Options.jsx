import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer } from "../redux/gameSlice";

const Options = () => {
  const dispatch = useDispatch();

  const { selectedAnswer, currentQuestion, showFeedback } = useSelector(
    (state) => state.game
  );
  const handleAnswer = (answer) => {
    dispatch(selectAnswer(answer));
  };

  return (
    <>
      {currentQuestion.options.map((option) => (
        <Button
          key={option}
          variant="contained"
          sx={{
            "&:disabled": {
              bgcolor:
                option === currentQuestion.city
                  ? "green"
                  : option === selectedAnswer
                  ? "red"
                  : "gray",
              color: "#fff",
            },
            "&:hover": {
              transform: "scale(1.05)",
              bgcolor: "#FFA000",
            },
            transition: "all 0.2s ease-in-out",
          }}
          onClick={handleAnswer.bind(this, option)}
          disabled={showFeedback}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

export default Options;

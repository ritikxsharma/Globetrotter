import { Button, LinearProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { decrementTimer } from "../redux/gameSlice";

const Timer = ({ gameClose }) => {
  const dispatch = useDispatch();
  const { timeLeft, totalTime, showFeedback } = useSelector(
    (state) => state.game
  );
  useEffect(() => {
    if (showFeedback) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => dispatch(decrementTimer()), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showFeedback, dispatch]);
  return (
    <>
      <LinearProgress
        variant="determinate"
        value={(timeLeft / totalTime) * 100}
        sx={{
          height: 2,
          backgroundColor: "#ddd",
          "& .MuiLinearProgress-bar": {
            backgroundColor: timeLeft <= 3 ? "red" : "blue",
          },
        }}
      />

      <motion.div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 10px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: timeLeft <= 3 ? "red" : "black",
            Visibility: "hidden",
          }}
        >
          Time Left: {timeLeft}s
        </Typography>

        <Button
          variant="contained"
          onClick={gameClose}
          sx={{
            display: "grid",
            placeSelf: "end",
            width: "100px",
            mt: 2,
            bgcolor: "#E91E63",
            "&:hover": {
              backgroundColor: "#FBBF24",
              color: "#111",
            },
          }}
        >
          END
        </Button>
      </motion.div>
    </>
  );
};

export default Timer;

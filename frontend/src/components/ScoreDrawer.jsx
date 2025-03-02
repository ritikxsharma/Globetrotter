import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

const ScoreDrawer = ({ isOpen }) => {
  const { correctAnswers, incorrectAnswers } = useSelector(
    (state) => state.game
  );
  return (
    <motion.div
      animate={{
        y: isOpen ? 0 : "-100%",
        width: isOpen ? "18vw" : 0,
        opacity: isOpen ? 1 : 0,
        minWidth: isOpen ? "140px" : 0,
      }}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      style={{
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        textAlign: "center",
        background: "linear-gradient(329deg, #8EC5FC, #E0C3FC)",
      }}
    >
      {isOpen && (
        <>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Game Stats
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "80%",
              height: "100px",
              borderRadius: "12px",
              background: "rgba(211, 163, 163, 0.3)",
              textAlign: "center ",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {correctAnswers}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                background: "rgb(36, 224, 133)",
                borderRadius: "0 12px 0 0",
              }}
            >
              Correct
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              position: "relative",
              width: "80%",
              height: "100px",
              borderRadius: "12px",
              background: "rgba(211, 163, 163, 0.3)",
              textAlign: "center ",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {incorrectAnswers}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                background: "red",
                borderRadius: "0 12px 0 0",
              }}
            >
              Incorrect
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 3,
            }}
          >
            Score: {correctAnswers - incorrectAnswers}
          </Typography>
        </>
      )}
    </motion.div>
  );
};

export default ScoreDrawer;

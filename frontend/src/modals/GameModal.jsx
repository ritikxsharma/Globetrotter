import {
  Box,
  Card,
  CardContent,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewQuestion, toggleConfetti } from "../redux/gameSlice";
import Confetti from "react-confetti";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ScoreDrawer from "../components/ScoreDrawer";
import Feedback from "../components/Feedback";
import Options from "../components/Options";
import Timer from "../components/Timer";
import Loader from "../components/Loader";

const GameModal = ({ gameOpen, gameClose }) => {
  const dispatch = useDispatch();

  const { currentQuestion, showConfetti, isLoading } = useSelector(
    (state) => state.game
  );

  const [pieces, setPieces] = useState(200);
  const [scoreDrawer, setScoreDrawer] = useState(false);
  const [triviaIndex, setTriviaIndex] = useState(0);
  const triviaList = currentQuestion?.trivia || [];

  useEffect(() => {
    const fetchQuestion = async () => {
      await dispatch(fetchNewQuestion()).unwrap();
    };
    fetchQuestion();
  }, []);

  useEffect(() => {
    let interval;
    if (showConfetti) {
      setPieces(200);
      setTimeout(() => {
        interval = setInterval(() => {
          setPieces((prev) => Math.max(prev - 20, 0));
        }, 100);
      }, 600);

      setTimeout(() => {
        dispatch(toggleConfetti(false));
        clearInterval(interval);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [showConfetti]);

  const toggleScoreDrawer = () => {
    setScoreDrawer((prev) => !prev);
  };

  const nextTrivia = () => {
    setTriviaIndex((prev) => (prev + 1) % triviaList.length);
  };

  const prevTrivia = () => {
    setTriviaIndex(
      (prev) => (prev - 1 + triviaList.length) % triviaList.length
    );
  };

  return (
    <Modal
      open={gameOpen}
      onClose={gameClose}
      sx={{
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            width: "80vw",
            height: "80vh",
            boxShadow: 24,
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              p: 2,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              background: "linear-gradient(31deg, #8EC5FC, #E0C3FC)",
            }}
          >
            {showConfetti && (
              <Confetti width={window.innerWidth} numberOfPieces={pieces} />
            )}

            <Timer gameClose={gameClose} />

            <motion.div
              key={currentQuestion?.uniqueId}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <IconButton onClick={prevTrivia}>
                    <ChevronLeft />
                  </IconButton>
                  <Typography variant="h6">
                    {currentQuestion?.clues[triviaIndex]}
                  </Typography>
                  <IconButton onClick={nextTrivia}>
                    <ChevronRight />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    width: "70%",
                    display: "grid",
                    placeSelf: "center",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    padding: 2,
                    gap: 1,
                  }}
                >
                  <Options options={currentQuestion?.options} />
                </Box>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Feedback />
                </motion.div>
              </CardContent>
            </motion.div>
          </Card>
          <IconButton
            onClick={toggleScoreDrawer}
            sx={{
              color: "#fff",
            }}
          >
            {scoreDrawer ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
          <ScoreDrawer isOpen={scoreDrawer} />
        </Box>
      )}
    </Modal>
  );
};

export default GameModal;

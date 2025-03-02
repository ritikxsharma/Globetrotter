import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCountdown,
  acceptChallenge,
  startGame,
} from "../redux/challengeSlice";

const InviteModal = ({ openGame, onClose }) => {
  const dispatch = useDispatch();
  const { challenger, challengeOpen, countdownOpen, countdown, loading } =
    useSelector((state) => state.challenge);

  useEffect(() => {
    if (!countdownOpen) return;

    let count = 3;
    dispatch(updateCountdown(count));

    const interval = setInterval(() => {
      count -= 1;
      dispatch(updateCountdown(count));

      if (count === 0) {
        clearInterval(interval);
        dispatch(startGame());
        openGame();
        onClose();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownOpen, dispatch]);

  const handleAcceptChallenge = () => {
    dispatch(acceptChallenge());
  };

  return (
    <>
      <Modal
        open={challenger}
        onClose={onClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            textAlign: "center",
            boxShadow: 24,
            mx: "auto",
            my: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {challenger?.username} has challenged you!
              </Typography>
              <Typography variant="body1">
                Score to beat: <strong>{challenger?.score}</strong>
              </Typography>
              <Button
                onClick={handleAcceptChallenge}
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#FBBF24",
                  "&:hover": { background: "#F59E0B" },
                }}
              >
                Accept Challenge
              </Button>
            </>
          )}
        </Box>
      </Modal>
      <Modal
        open={countdownOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Typography variant="h1" sx={{ color: "#FBBF24", fontWeight: "bold" }}>
          {countdown === 0 ? "GO!" : countdown}
        </Typography>
      </Modal>
    </>
  );
};

export default InviteModal;

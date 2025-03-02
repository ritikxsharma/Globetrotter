import { Box, Button, Container, Typography } from "@mui/material";
import React, { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import GlobeIcon from "@mui/icons-material/Public";
import { useDispatch } from "react-redux";
import { getChallengerData } from "../axios/apiClient";
import { setChallenger } from "../redux/challengeSlice";
import Loader from "../components/Loader";

// Lazy loading modals to optimize performance
const GameModal = lazy(() => import("../modals/GameModal"));
const RegisterModal = lazy(() => import("../modals/RegisterModal"));
const InviteModal = lazy(() => import("../modals/InviteModal"));

const LandingPage = () => {
  const dispatch = useDispatch();
  const [gameOpen, setGameOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [openChallenge, setOpenChallenge] = useState(false);

  // Check if the user has accessed the page via a challenge link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const challengerParam = params.get("challenger");

    if (challengerParam) {
      const fetchChallengerData = async () => {
        try {
          //Fetch the challenger data and store
          const response = await getChallengerData(challengerParam);
          dispatch(setChallenger(response.data));
          setOpenChallenge(true);
          const newUrl = `${window.location.pathname}`;
          window.history.replaceState({}, "", newUrl);
        } catch (error) {
          console.error("Error fetching inviter data:", error);
        }
      };
      fetchChallengerData();
    }
  }, [dispatch]);

  // Handlers for opening and closing modals
  const handleGameOpen = () => setGameOpen(true);
  const handleGameClose = () => setGameOpen(false);
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);
  const handleChallengeClose = () => setOpenChallenge(false);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1E3A8A, #9333EA)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        gap: 1,
      }}
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 10 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <Container
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title with animated Globe Icon */}
        <motion.div
          initial={{ opacity: 0.4, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
            gutterBottom
          >
            Welcome to
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Gl
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GlobeIcon sx={{ fontSize: 44 }} />
              </motion.span>
              betrotter
            </span>
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            variant="h5"
            sx={{
              maxWidth: "600px",
              opacity: 0.9,
            }}
            gutterBottom
          >
            Test your knowledge of famous destinations with fun cryptic clues.
            Can you guess them all?
          </Typography>
        </motion.div>

        {/* Start Game Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ marginTop: 10 }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#FBBF24",
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "10",
              transition: "0.3s",
              "&:hover": {
                background: "#F59E0B",
              },
            }}
            onClick={handleGameOpen}
          >
            Start Game
          </Button>
        </motion.div>

        {/* Challenge Friend Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Button
            variant="contained"
            sx={{
              mt: 2,
              background: "linear-gradient(45deg, #FF512F, #DD2476)",
              color: "#fff",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "10px",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(45deg, #E63946, #C72B6F)",
              },
            }}
            onClick={handleRegisterOpen}
          >
            Challenge a Friend
          </Button>
        </motion.div>

        {/* Lazy loaded modals wrapped in Suspense*/}
        <Suspense fallback={<Loader />}>
          {gameOpen && (
            <GameModal gameOpen={gameOpen} gameClose={handleGameClose} />
          )}
          {registerOpen && (
            <RegisterModal open={registerOpen} onClose={handleRegisterClose} />
          )}
          {openChallenge && (
            <InviteModal
              openGame={handleGameOpen}
              onClose={handleChallengeClose}
            />
          )}
        </Suspense>
      </Container>
    </Box>
  );
};

export default LandingPage;

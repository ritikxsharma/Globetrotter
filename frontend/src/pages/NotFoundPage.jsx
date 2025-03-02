import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const handleBackToHome = () => {
    window.location.href = `${window.location.origin}/game`;
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1E3A8A, #9333EA)",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Floating Animation for the 404 text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          404
        </Typography>
      </motion.div>

      {/* Message */}
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
            marginBottom: 2,
          }}
        >
          Oops! The page you are looking for doesn’t exist. Maybe it’s lost
          somewhere in the Globetrotter map! 🌍
        </Typography>
      </motion.div>

      {/* Home Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="contained"
          sx={{
            background: "#FBBF24",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "10px",
            transition: "0.3s",
            "&:hover": {
              background: "#F59E0B",
            },
          }}
          onClick={handleBackToHome}
        >
          Take Me Home
        </Button>
      </motion.div>
    </Box>
  );
};

export default NotFoundPage;

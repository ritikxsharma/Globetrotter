import { Modal, Typography } from "@mui/material";
import React from "react";

const CountdownModal = ({ showCountdown }) => {
  return (
    <Modal
      open={showCountdown}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#FBBF24",
          fontWeight: "bold",
          textShadow: "4px 4px 10px rgba(255, 255, 255, 0.8)",
        }}
      >
        {countdown === 0 ? "GO!" : countdown}
      </Typography>
    </Modal>
  );
};

export default CountdownModal;

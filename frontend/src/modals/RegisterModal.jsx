import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Close, ContentCopy } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { registerUser } from "../axios/apiClient";

const RegisterModal = ({ open, onClose }) => {
  const { correctAnswers, incorrectAnswers } = useSelector(
    (state) => state.game
  );

  const totalScore = correctAnswers - incorrectAnswers;
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [inviteLink, setInviteLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await registerUser(username, totalScore);

      if (response.status === 201) {
        const generatedLink = `${window.location.origin}/game?challenger=${username}`;
        setInviteLink(generatedLink);
        setRegistered(true);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied!");
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        sx={{
          width: "400px",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          position: "relative",
          textAlign: "center",
          background: "linear-gradient(to right, #d3cce3, #e9e4f0)",
          p: 3,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <Close />
        </IconButton>

        {registered ? (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Challenge a Friend
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                bgcolor: "#6A1B9A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <Typography variant="h4" color="white">
                {username.charAt(0).toUpperCase()}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {username}
            </Typography>
            <Button
              onClick={copyToClipboard}
              variant="contained"
              startIcon={<ContentCopy />}
              sx={{
                background: "#6A1B9A",
                "&:hover": { background: "#4A148C" },
              }}
            >
              Copy Invite Link
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Enter a Unique Username
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                error={!!errorMessage}
                helperText={errorMessage}
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  background: "#6A1B9A",
                  "&:hover": { background: "#4A148C" },
                }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default RegisterModal;

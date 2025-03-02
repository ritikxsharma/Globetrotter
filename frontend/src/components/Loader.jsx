import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Loader;

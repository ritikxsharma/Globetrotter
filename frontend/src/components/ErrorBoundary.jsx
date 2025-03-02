import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // console.log("Error caught: ", error);
    return {
      hasError: true,
    };
  }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error Details:", error, errorInfo);
//   }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
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
          }}
        >
          <Typography variant="h4" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Typography variant="h6">
            An unexpected error occurred. Please try refreshing the page.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#FF5722",
              "&:hover": { backgroundColor: "#E64A19" },
            }}
            onClick={this.handleReload}
          >
            Reload Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

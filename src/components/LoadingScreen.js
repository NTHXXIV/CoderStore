import React from "react";
import { Box, CircularProgress } from "@mui/material";

function LoadingScreen() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingScreen;

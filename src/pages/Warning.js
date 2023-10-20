import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

function Warning() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export default Warning;

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Side from "./Side";

export default function SideBar() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Side />
      </Box>
    </div>
  );
}

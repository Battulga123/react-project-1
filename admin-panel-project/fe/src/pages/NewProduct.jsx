import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Side from "../components/Side";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox, TextField } from "@mui/material";

export default function NewProduct() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Side />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "80ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="firstName" label="First Name" variant="outlined" />
            <TextField id="lastName" label="Last Name" variant="outlined" />
            <TextField
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
            />
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="outlined"
            />
          </Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel value="user" control={<Radio />} label="User" />
            </RadioGroup>
          </FormControl>
          <Checkbox defaultChecked />
        </Box>
      </Box>
    </div>
  );
}

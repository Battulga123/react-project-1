import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Side from "../components/Side";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Checkbox, TextField, Typography } from "@mui/material";

export default function NewProduct() {
  return (
    <div>
      <Box sx={{ display: "flex", p: 3 }}>
        <Side />
        <Box>
          <Toolbar />
          <FormLabel sx={{ fontSize: 30 }}>Add Users</FormLabel>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "90%" },
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
          <Box sx={{ marginTop: 2 }}>
            <FormLabel id="role">Role</FormLabel>
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
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <FormControl>
              <FormLabel id="disabled">Disabled</FormLabel>
              <Checkbox defaultChecked />
            </FormControl>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <FormControl>
              <FormLabel>Avatar</FormLabel>
              <Button variant="contained" sx={{ marginTop: 2 }}>
                UPLOAD AN IMAGE
              </Button>
            </FormControl>
          </Box>
          <Box sx={{ marginTop: 2, width: "90%" }}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              sx={{ width: "90%" }}
            />
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" sx={{ marginRight: 3 }}>
              SAVE
            </Button>
            <Button variant="contained" sx={{ marginRight: 3 }}>
              RESET
            </Button>
            <Button variant="contained" sx={{ marginRight: 3 }}>
              CANCEL
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

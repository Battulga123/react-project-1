import Side from "../components/Side";
import * as React from "react";
import {
  Button,
  TextField,
  FormControl,
  RadioGroup,
  Box,
  Toolbar,
  Radio,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

export default function NewUser() {
  function handleSave(e) {
    e.preventDefault();
    console.log("clicked");
    const data = {
      firstname: e.target.firstName.value,
      lastname: e.target.lastName.value,
      role: e.target.userRole.value,
      phone: e.target.phoneNumber.value,
      email: e.target.email.value,
    };
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSave}>
        <Box sx={{ display: "flex", p: 3 }}>
          <Side />
          <Box>
            <Toolbar />
            <FormLabel sx={{ fontSize: 30 }}>Users Role</FormLabel>
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "90%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                name="firstName"
              />
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                name="lastName"
              />
              <TextField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                name="email"
              />

              <TextField name="password" label="Password" variant="outlined" />
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Role
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="userRole"
                >
                  <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Admin"
                  />
                  <FormControlLabel
                    value="user"
                    control={<Radio />}
                    label="User"
                  />
                  <FormControlLabel
                    value="customer"
                    control={<Radio />}
                    label="Customer"
                  />
                </RadioGroup>
              </FormControl>
              <FormGroup>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Disabled
                </FormLabel>
                <FormControlLabel control={<Checkbox />} />
              </FormGroup>
            </Box>

            <Button variant="contained" sx={{ marginRight: 3 }} type="submit">
              SAVE
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
}

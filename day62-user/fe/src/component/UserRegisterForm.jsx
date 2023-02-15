import React from "react";
import TextFiled from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function UserRegisterForm() {
  const URL = "http://localhost:8081/register";

  const ROLE_URL = "http://localhost:8081/users/roles";

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
    console.log(roles);
  }

  function handleSelectChange(e) {
    console.log(e.target.value);
    setCurrentRole(e.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
    };
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      navigate("/users");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextFiled
              id="firstname"
              variant="filled"
              size="small"
              defaultValue=""
              label="First name"
              name="firstname"
            ></TextFiled>
          </Grid>
          <Grid item xs={12}>
            <TextFiled
              id="lastname"
              variant="filled"
              size="small"
              defaultValue=""
              label="Last name"
              name="lastname"
            ></TextFiled>
          </Grid>
          <Grid item xs={12}>
            <TextFiled
              id="email"
              name="email"
              variant="filled"
              size="small"
              defaultValue=""
              label="Email"
            ></TextFiled>
          </Grid>
          <Grid item xs={12}>
            <TextFiled
              id="password"
              variant="filled"
              size="small"
              name="password"
              defaultValue=""
              label="Password"
            ></TextFiled>
          </Grid>
          <Grid item xs={12}>
            <TextFiled
              id="confirm-password"
              variant="filled"
              size="small"
              defaultValue=""
              label="Confirm Password"
              name="confirm"
            ></TextFiled>
          </Grid>
          <Grid item xs={12}>
            <TextFiled
              id="address"
              variant="filled"
              size="small"
              defaultValue=""
              label="Address"
              name="address"
            ></TextFiled>
          </Grid>

          <Grid item xs={12}>
            <InputLabel>User Role</InputLabel>
            <Select
              id="role-selector"
              value={currentRole}
              label="Roles"
              onChange={handleSelectChange}
            >
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem value={role.id} key={index}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

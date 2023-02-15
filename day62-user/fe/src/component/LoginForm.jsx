import { Grid, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const LOGIN_URL = "http://localhost:8081/login";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(LOGIN_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      toast("Login successfull");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              variant="filled"
              size="small"
              defaultValue=""
              label="Email"
              name="email"
              type="email"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              variant="filled"
              size="small"
              defaultValue=""
              label="Password"
              name="Password"
              type="password"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </div>
  );
}

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "First name" },
  { field: "lastName", headerName: "Last name" },
  { field: "phoneNumber", headerName: "Phone Number", type: "number" },
  { field: "email", headerName: "E-Mail", type: "email" },
  { field: "role", headerName: "Role", type: "text" },
  { field: "disabled", headerName: "Disabled", type: "text" },
  { field: "avatar", headerName: "Avatar", type: "text" },
  { field: "action", headerName: "Action" },
];
const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phoneNumber: 35,
    email: "Jon@gmail.com",
    role: "user",
    disabled: "Yes",
  },
];

export default function UsersTable() {
  const navigate = useNavigate();

  const handleNewUser = () => {
    navigate("/newproduct")
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography>Users</Typography>

      <Button variant="contained" onClick={handleNewUser}>
        New
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

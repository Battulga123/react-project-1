import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import TableContainer from '@mui/material/TableContainer';
import Table from "@mui/material/Table";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "First name" },
  { field: "lastName", headerName: "Last name" },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "number",
  },
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
  {
    id: 2,
    lastName: "Snow",
    firstName: "Jon",
    phoneNumber: 35,
    email: "Jon@gmail.com",
    role: "user",
    disabled: "Yes",
  },
  {
    id: 3,
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
    navigate("/newproduct");
  };

  return (
    <div>
      <FormLabel sx={{ fontSize: 30 }}>Add Users</FormLabel>
      <TableContainer>
        <Button
          variant="contained"
          onClick={handleNewUser}
          sx={{ marginBottom: 3 }}
        >
          New
        </Button>
        <Table style={{ height: 600}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[3]}
            checkboxSelection
          />
        </Table>
      </TableContainer>
    </div>
  );
}

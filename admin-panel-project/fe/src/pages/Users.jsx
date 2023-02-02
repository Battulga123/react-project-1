import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Side from "../components/Side";
import UsersTable from "../components/UsersTable";

export default function Users() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Side />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <UsersTable />
        </Box>
      </Box>
    </div>
  );
}

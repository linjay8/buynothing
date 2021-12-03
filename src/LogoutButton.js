import { useAuth0 } from "@auth0/auth0-react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <MenuItem
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    >
      <Typography textAlign="center">Log Out</Typography>
    </MenuItem>
  );
}

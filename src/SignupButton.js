import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

export default function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      type="button"
      color="inherit"
      sx={{ my: 2, display: "block" }}
      onClick={() => {
        loginWithRedirect({ screen_hint: "signup" });
      }}
    >
      Sign Up
    </Button>
  );
}

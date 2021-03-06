import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function Profile() {
  const { user } = useAuth0();
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        raised="true"
        sx={{
          minWidth: 275,
          width: "40%",
          marginTop: "10%",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={user.picture}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {user.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              padding: "60px 0px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              align="center"
              color="textPrimary"
              variant="h2"
              sx={{ fontWeight: "700", marginBottom: "20px" }}
            >
              404: The page you are looking for isn’t here
            </Typography>
            <Typography align="center" color="textPrimary" variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <img
                alt="404 page"
                src="/not_found.svg"
                style={{
                  marginTop: 50,
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 560,
                }}
              />
            </Box>
            <Button
              component={Link}
              to="/"
              startIcon={<ArrowBackIcon fontSize="small" />}
              sx={{
                mt: 3,
                backgroundColor: "#57B894",
                "&:hover": {
                  backgroundColor: "#3A6944",
                  color: "white",
                },
              }}
              variant="contained"
            >
              Go back to the homepage
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

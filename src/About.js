import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Grid container sx={{ width: "85%", margin: "60px auto" }}>
        <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              margin: "20px",
              marginBottom: "40px",
            }}
          >
            About Us
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "17px", marginBottom: "60px" }}
          >
            BuyNothing offers people a way to give and receive, share, lend, and
            express gratitude through a worldwide gift economy network in which
            the true wealth is the web of connections formed between people. We
            believe that communities are more resilient, sustainable, equitable,
            and joyful when they have functional gift economies.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="https://pbs.twimg.com/media/FE0H3oOXMAQMg3H?format=jpg&name=4096x4096"
            alt="gift giving"
            width="100%"
          />
        </Grid>
      </Grid>
      <Box
        sx={{ width: "100%", backgroundColor: "#EEEFE6", padding: "60px 0px" }}
      >
        <Box sx={{ minWidth: "400px", width: "50%", margin: "auto" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              Why we exist
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "20px" }}
            >
              We exist for the sole purpose of building community.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "60px" }}
            >
              We believe a gift economy's real wealth is the people involved and
              the web of connections that form to support them.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              What we stand for
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "20px" }}
            >
              Kindness. Caring for our Environment. Inclusion and Equity.
              Building Locally. Sustainability. Strength in Diversity.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "60px 0px",
        }}
      >
        <Box sx={{ minWidth: "400px", width: "50%", margin: "auto" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              Important note to mention
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "60px" }}
            >
              This is an imagined extension of a pre-existing project
              (buynothingproject.org). I am not affiliated with the Buy Nothing
              Project nor am I implying that this is an original concept. I am
              only the creator of this web project and the functionalities of
              this specific application. If you are curious about actually
              joining a Buy Nothing group, visit their real website and find out
              ways to take part in a group near you.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

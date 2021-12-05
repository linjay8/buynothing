import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AllPosts from "./AllPosts";
import Post from "./Post";

export default function Home() {
  return (
    <Box>
      <img
        src="https://bnponfb.org/wp-content/uploads/2021/05/bnbanner-2.jpg"
        width="100%"
        height="auto"
        alt="banner"
      />

      <Box sx={{ width: "70%", margin: "auto" }}>
        <Typography variant="h2" sx={{ textAlign: "center", margin: "20px" }}>
          Recent Posts
        </Typography>
      </Box>
      <AllPosts />
    </Box>
  );
}

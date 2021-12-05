import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AllPosts from "./AllPosts";
import Post from "./Post";

export default function Home() {
  return (
    <Box>
      <Typography variant="h1">Home</Typography>
      <AllPosts />
    </Box>
  );
}

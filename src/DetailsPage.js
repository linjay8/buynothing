import { Box } from "@mui/material";
import Comments from "./Comments";
import PostDetails from "./PostDetails";

export default function DetailsPage(props) {
  const id = props.match.params.postId;
  console.log("details page");
  return (
    <>
      <Box sx={{ marginBottom: "50px" }}>
        <PostDetails id={id} />
      </Box>
      <Comments id={id} />
    </>
  );
}

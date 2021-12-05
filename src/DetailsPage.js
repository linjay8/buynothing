import { Box } from "@mui/material";
import { useState } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import PostDetails from "./PostDetails";

export default function DetailsPage(props) {
  const id = props.match.params.postId;
  return (
    <>
      <Box sx={{ margin: "30px auto" }}>
        <PostDetails id={id} />
      </Box>
      <Comments id={id} />
    </>
  );
}

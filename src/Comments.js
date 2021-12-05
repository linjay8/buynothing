import {
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";
import Comment from "./Comment";

export default function Comments(props) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:4000/api/comments";
  useEffect(() => {
    setLoading(true);

    fetchAllComments();
  }, []);

  function fetchAllComments() {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setComments(json);
      });
  }
  return (
    <Box sx={{}}>
      <Grid container spacing={1}>
        {comments &&
          comments.map((comment) => {
            if (props.id == comment.postId) {
              return (
                <Grid item xs={12}>
                  <Comment
                    id={comment.id}
                    userId={comment.userId}
                    name={comment.name}
                    body={comment.body}
                    postId={comment.postId}
                  />
                </Grid>
              );
            }
          })}
      </Grid>
    </Box>
  );
}

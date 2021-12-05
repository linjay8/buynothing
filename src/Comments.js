import { useAuth0 } from "@auth0/auth0-react";
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
import CommentForm from "./CommentForm";

export default function Comments(props) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth0();

  const url = "http://localhost:4000/api/comments";
  useEffect(() => {
    setLoading(true);

    fetchAllComments();
  }, []);

  function fetchAllComments() {
    setLoading(true);
    fetch(url)
      .then(
        (response) => {
          return response.json();
        },
        (error) => {
          console.error(error);
        }
      )
      .then((json) => {
        setLoading(false);
        setComments(json);
      });
  }
  return (
    <Box sx={{ margin: "30px auto" }}>
      {isAuthenticated && (
        <CommentForm id={props.id} fetchAllComments={fetchAllComments} />
      )}
      <Grid container spacing={1}>
        {comments &&
          comments
            .map((comment) => {
              let time = new Date(comment.timestamp);
              time = time.toLocaleString();
              if (props.id == comment.postId) {
                return (
                  <Grid item xs={12}>
                    <Comment
                      id={comment.id}
                      userId={comment.userId}
                      name={comment.name}
                      body={comment.body}
                      postId={comment.postId}
                      fetchAllComments={fetchAllComments}
                      time={time}
                    />
                  </Grid>
                );
              }
            })
            .reverse()}
      </Grid>
    </Box>
  );
}

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
import Post from "./Post";

export default function AllPosts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:4000/api/posts";
  useEffect(() => {
    setLoading(true);
    fetchAllPosts();
  }, []);

  function fetchAllPosts() {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setPosts(json);
      });
  }
  return (
    <Box sx={{}}>
      <Grid container spacing={2}>
        {posts &&
          posts.map((post) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Post
                  id={post.id}
                  name={post.fullName}
                  city={post.city}
                  item={post.item}
                  type={post.type}
                  description={post.description}
                  postType={post.categoryId}
                  pickup={post.pickup}
                  availability={post.availability}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

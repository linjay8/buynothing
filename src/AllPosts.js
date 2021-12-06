import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function AllPosts() {
  const [posts, setPosts] = useState(null);

  const url = "https://buy-nothing-api.herokuapp.com/api/posts";
  useEffect(() => {
    fetchAllPosts();
  }, []);

  function fetchAllPosts() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPosts(json);
      });
  }
  return (
    <Box sx={{ width: "95%", margin: "auto", marginBottom: "30px" }}>
      <Grid container spacing={6}>
        {posts &&
          posts
            .map((post) => {
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
            })
            .reverse()}
      </Grid>
    </Box>
  );
}

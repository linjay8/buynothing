import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function MyPosts() {
  const [posts, setPosts] = useState(null);
  const { user } = useAuth0();

  const url = "https://buy-nothing-api.herokuapp.com/api/posts";
  useEffect(() => {
    fetchAllPosts();
    document.title = "My Posts";
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
    <>
      <Box sx={{ width: "70%", margin: "auto" }}>
        <Typography variant="h2" sx={{ textAlign: "center", margin: "20px" }}>
          My Posts
        </Typography>
      </Box>
      <Box sx={{ width: "95%", margin: " 30px auto" }}>
        <Grid container spacing={6}>
          {posts &&
            posts.map((post) => {
              if (post.userId === user.sub) {
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
              }
              return <></>;
            })}
        </Grid>
      </Box>
    </>
  );
}

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chip, IconButton, Menu, MenuItem } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function PostDetails(props) {
  const url = "http://localhost:4000/api/posts/";
  const commentsUrl = "http://localhost:4000/api/comments/";
  const id = props.id;
  const { user } = useAuth0();
  const [post, setPost] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [itemAvail, setItemAvail] = useState("");
  const [itemAvailColor, setItemAvailColor] = useState("success");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();
  function fetchPost() {
    fetch(url + id)
      .then(
        (response) => {
          return response.json();
        },
        (error) => {
          console.error(error);
        }
      )
      .then(
        (json) => {
          setPost(json);

          if (json.availability === 0) {
            setItemAvail("Available");
            setItemAvailColor("success");
          } else if (json.availability === 1) {
            setItemAvail("Pending");
            setItemAvailColor("warning");
          } else if (json.availability === 2) {
            setItemAvail("Unavailable");
            setItemAvailColor("error");
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
  function deletePost() {
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!isDeleteConfirmed) {
      return;
    }
    fetch(url + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  }
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Box>
      {post && (
        <Card
          raised="true"
          sx={{
            minWidth: 275,
            width: "60%",
            position: "relative",
            margin: "auto",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ position: "absolute", bottom: 15, right: 15 }}>
            <Chip
              label={post.categoryId ? "Ask" : "Gift"}
              size="small"
              variant="outlined"
              color="secondary"
              sx={{ marginRight: "5px" }}
            />
            <Chip
              label={itemAvail}
              size="small"
              variant="contained"
              color={itemAvailColor}
            />
          </Box>
          <CardContent sx={{ position: "relative" }}>
            <Typography
              sx={{ fontSize: 14, display: "inline" }}
              color="text.secondary"
              gutterBottom
            >
              {post.fullName}
            </Typography>
            {user && user.sub === post.userId && (
              <Box sx={{ display: "inline", position: "absolute", right: 15 }}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls="long-menu"
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: "20ch",
                    },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      history.push(`/posts/${id}/edit`);
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem onClick={deletePost}>Delete</MenuItem>
                </Menu>
              </Box>
            )}
            <Typography variant="h5" component="div">
              {post.item}
            </Typography>
            <Typography
              sx={{ mb: 1.5, display: "inline" }}
              color="text.secondary"
            >
              {post.city}
            </Typography>
            {post.pickup && (
              <Typography
                sx={{ mb: 1.5, display: "inline" }}
                color="text.secondary"
              >
                {" "}
                - {post.categoryId ? "Can pickup" : "Pickup only"}
              </Typography>
            )}

            <Typography variant="body2">{post.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}

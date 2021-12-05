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

export default function Comment(props) {
  const url = "http://localhost:4000/api/comments/";
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const { id, userId, name, body } = props;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();

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
      // history push
    });
  }

  return (
    <Box>
      <Card
        sx={{
          minWidth: 275,
          width: "60%",
          position: "relative",
          margin: "auto",
          marginBottom: 0,
        }}
      >
        <CardContent sx={{ position: "relative" }}>
          <Typography
            sx={{ fontSize: 14, display: "inline" }}
            color="text.secondary"
            gutterBottom
          >
            {/* Time goes here */}
          </Typography>

          {user.sub === userId && (
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
                <MenuItem onClick={deletePost}>Delete</MenuItem>
              </Menu>
            </Box>
          )}
          <Typography
            sx={{ mb: 1.5, display: "inline" }}
            color="text.secondary"
          >
            {name}
          </Typography>

          <Typography variant="body2">{body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

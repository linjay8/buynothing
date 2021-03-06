import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Comment(props) {
  const url = "https://buy-nothing-api.herokuapp.com/api/comments/";
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const { id, userId, name, body, time } = props;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function deletePost() {
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!isDeleteConfirmed) {
      return;
    }
    fetch(url + id, {
      method: "DELETE",
    }).then(() => {
      props.fetchAllComments();
      toast.success("Your comment was successfully deleted.");
    });
  }

  return (
    <Box>
      <Card
        raised="true"
        sx={{
          minWidth: 275,
          width: "60%",
          position: "relative",
          margin: "auto",
          marginBottom: 0,
          borderRadius: "20px",
        }}
      >
        <CardContent sx={{ position: "relative" }}>
          <Typography
            sx={{ fontSize: 14, display: "inline" }}
            color="text.secondary"
            gutterBottom
          >
            {time}
          </Typography>

          {user && user.sub === userId && (
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
          <Typography sx={{ mb: 0.5 }} color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2">{body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

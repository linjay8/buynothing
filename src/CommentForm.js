import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import {
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  TextField,
  Stack,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function CommentForm(props) {
  const url = "http://localhost:4000/api/comments/";
  const { user } = useAuth0();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleNameChange(event) {
    setName(event.target.value);
    setNameError("");
  }
  function handleBodyChange(event) {
    setBody(event.target.value);
    setBodyError("");
  }
  function submitComment() {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        body: body,
        postId: props.id,
        userId: user.sub,
        timestamp: new Date(),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        //toast.success(`Post "${json.title}" was successfully created.`);
        setName("");
        setBody("");
        props.fetchAllComments();
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let error = false;
    if (!name) {
      setNameError("Please fill out required fields.");
      error = true;
    }
    if (!body) {
      setBodyError("Please fill out required fields.");
      error = true;
    }

    if (!error) {
      submitComment();
    }
  }

  let history = useHistory();

  return (
    <Box
      sx={{ margin: "30px auto" }}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
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
        <CardContent sx={{ position: "relative" }}>
          <Grid container spacing={2} sx={{ display: "flex" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="inputName"
                label="Name"
                value={name}
                error={!!nameError}
                helperText={nameError}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="inputDescription"
                label="Comment"
                multiline
                rows={4}
                value={body}
                error={!!bodyError}
                helperText={bodyError}
                onChange={handleBodyChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#3A6944",
                  "&:hover": {
                    backgroundColor: "#57B894",
                  },
                }}
              >
                Comment
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

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
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

export default function AskForm(props) {
  useEffect(() => {
    document.title = "Ask Form";
  }, []);
  const url = "https://buy-nothing-api.herokuapp.com/api/posts";
  const { user } = useAuth0();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [item, setItem] = useState("");
  const [itemError, setItemError] = useState("");
  const [type, setType] = useState("");
  const [typeError, setTypeError] = useState("");
  const [description, setDescription] = useState("");
  const [pickup, setPickup] = useState(false);
  function handleNameChange(event) {
    setName(event.target.value);
    setNameError("");
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    setCityError("");
  }
  function handleItemChange(event) {
    setItem(event.target.value);
    setItemError("");
  }
  function handleTypeChange(event) {
    setType(event.target.value);
    setTypeError("");
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handlePickupChange(event) {
    setPickup(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let error = false;
    if (!name) {
      setNameError("Please fill out required fields.");
      error = true;
    }
    if (!city) {
      setCityError("Please fill out required fields.");
      error = true;
    }
    if (!item) {
      setItemError("Please fill out required fields.");
      error = true;
    }
    if (!type) {
      setTypeError("Please fill out required fields.");
      error = true;
    }
    if (!error) {
      submitPost();
    }
  }
  function submitPost() {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        fullName: name,
        city: city,
        item: item,
        itemType: type,
        description: description,
        pickup: pickup,
        categoryId: 1,
        userId: user.sub,
        availability: 0,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        toast.success(`Your ask post was successfully created.`);
        props.history.push("/");
      });
  }
  function clearAll() {
    setName("");
    setCity("");
    setItem("");
    setType("");
    setDescription("");
    setPickup(false);
  }
  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "75%", margin: "auto" }}
        noValidate
      >
        <Typography variant="h2" textAlign="center" margin="40px">
          Ask
        </Typography>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="inputName"
              label="Full Name"
              value={name}
              error={!!nameError}
              helperText={nameError}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="inputCity"
              label="City"
              value={city}
              error={!!cityError}
              helperText={cityError}
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              required
              id="inputItem"
              label="Item"
              value={item}
              error={!!itemError}
              helperText={itemError}
              onChange={handleItemChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="inputType"
              select
              fullWidth
              required
              label="Item Type"
              value={type}
              error={!!typeError}
              helperText={typeError}
              onChange={handleTypeChange}
            >
              <MenuItem value="">--Select one--</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Service">Service</MenuItem>
              <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="inputDescription"
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              label="Can pickup?"
              id="inputPickup"
              control={
                <Checkbox
                  checked={pickup}
                  onChange={handlePickupChange}
                  sx={{
                    color: "#3A6944",
                    "&.Mui-checked": {
                      color: "#3A6944",
                    },
                  }}
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
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
                Post
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={clearAll}
                sx={{
                  borderColor: "#3A6944",
                  color: "#3A6944",
                  "&:hover": {
                    borderColor: "#57B894",
                    color: "#57B894",
                  },
                }}
              >
                Clear
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

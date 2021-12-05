import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function Post(props) {
  const {
    id,
    name,
    city,
    item,
    type,
    description,
    pickup,
    status,
    postType,
    availability,
  } = props;
  const postCategory = postType ? "Ask" : "Gift";
  let itemAvail = "";
  let itemAvailColor = "";
  if (availability === 0) {
    itemAvail = "Available";
    itemAvailColor = "success";
  } else if (availability === 1) {
    itemAvail = "Pending";
    itemAvailColor = "warning";
  } else if (availability === 2) {
    itemAvail = "Unavailable";
    itemAvailColor = "error";
  }
  let history = useHistory();

  return (
    <Card
      sx={{
        minWidth: 275,
        width: "100%",
        position: "relative",
        height: "100%",
      }}
    >
      <CardActionArea
        onClick={() => {
          history.push(`/posts/${id}`);
        }}
        sx={{ height: "100%" }}
      >
        <Chip
          label={itemAvail}
          size="small"
          variant="contained"
          sx={{ position: "absolute", bottom: 15, right: 15 }}
          color={itemAvailColor}
        />
        <CardContent sx={{ position: "relative" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>

          <Chip
            label={postCategory}
            size="small"
            variant="outlined"
            sx={{ position: "absolute", top: 15, right: 15 }}
            color="secondary"
          />
          <Typography variant="h5" component="div">
            {item}
          </Typography>
          <Typography
            sx={{ mb: 1.5, display: "inline" }}
            color="text.secondary"
          >
            {city}
          </Typography>
          {pickup && (
            <Typography
              sx={{ mb: 1.5, display: "inline" }}
              color="text.secondary"
            >
              {" "}
              - {postType ? "Can pickup" : "Pickup only"}
            </Typography>
          )}

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

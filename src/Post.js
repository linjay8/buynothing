import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function Post(props) {
  const { id, name, city, item, description, pickup, postType, availability } =
    props;
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
      raised={true}
      sx={{
        minWidth: 275,
        width: "100%",
        position: "relative",
        height: "100%",
        borderRadius: "20px",
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
          data-testid="availability"
        />
        <CardContent sx={{}}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            data-testid="name"
          >
            {name}
          </Typography>

          <Chip
            label={postCategory}
            size="small"
            variant="outlined"
            sx={{ position: "absolute", top: 15, right: 15 }}
            color={postCategory === "Gift" ? "secondary" : "primary"}
            data-testid="category"
          />
          <Typography variant="h5" component="div" data-testid="item">
            {item}
          </Typography>
          <Typography
            sx={{ mb: 1.5, display: "inline" }}
            color="text.secondary"
            data-testid="city"
          >
            {city}
          </Typography>
          {pickup && (
            <Typography
              sx={{ mb: 1.5, display: "inline" }}
              color="text.secondary"
              data-testid="pickup"
            >
              {" "}
              - {postType ? "Can pickup" : "Pickup only"}
            </Typography>
          )}

          <Typography variant="body2" data-testid="description">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

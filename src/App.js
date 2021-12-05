import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GiftForm from "./GiftForm";
import AskForm from "./AskForm";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import MyPosts from "./MyPosts";
import PostDetails from "./PostDetails";
import EditPost from "./EditPost";
import DetailsPage from "./DetailsPage";

export default class App extends React.Component {
  render() {
    return (
      <Box>
        <Router>
          <Nav />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/ask" component={AskForm} />
            <Route path="/gift" component={GiftForm} />
            <Route path="/profile" component={Profile} />
            <Route path="/myposts" component={MyPosts} />
            <Route path="/posts/:postId/edit" component={EditPost} />
            <Route path="/posts/:postId" component={DetailsPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Box>
    );
  }
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Box from "@mui/material/Box";
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
import EditPost from "./EditPost";
import DetailsPage from "./DetailsPage";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import NotFound from "./NotFound";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter, Roboto",
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
      fontWeightBold: 600,
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh" /* will cover the 100% of viewport */,
        display: "block",
        position: "relative",
        paddingBottom: "60px" /* height of your footer */,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box>
          <Router>
            <Nav />
            <Box>
              <Switch>
                <Route path="/about" component={About} />
                <ProtectedRoute path="/ask" component={AskForm} />
                <ProtectedRoute path="/gift" component={GiftForm} />
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/myposts" component={MyPosts} />
                <ProtectedRoute
                  path="/posts/:postId/edit"
                  component={EditPost}
                />
                <Route path="/posts/:postId" component={DetailsPage} />
                <Route exact path="/" component={Home} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
            </Box>
          </Router>
        </Box>
      </ThemeProvider>
      <footer>
        <Footer />
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnFocusLoss={false}
        transition={Slide}
      />
    </Box>
  );
}

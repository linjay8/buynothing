import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import ScrollToColor from "./ScrollToColor";

export default function Nav() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ScrollToColor>
      <AppBar position="sticky" sx={{ backgroundColor: "#3A6944" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", cursor: "pointer" },
              }}
              onClick={() => {
                history.push("/");
              }}
            >
              Buy Nothing
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/"
                  exact
                  activeStyle={{ color: "#1D3522" }}
                  sx={{
                    color: "#3A6944",
                    "&:hover": {
                      color: "#1D3522",
                    },
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/about"
                  activeStyle={{ color: "#1D3522" }}
                  sx={{
                    color: "#3A6944",
                    "&:hover": {
                      color: "#1D3522",
                    },
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/gift"
                  activeStyle={{ color: "#1D3522" }}
                  sx={{
                    color: "#3A6944",
                    "&:hover": {
                      color: "#1D3522",
                    },
                  }}
                >
                  Gift
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/ask"
                  activeStyle={{ color: "#1D3522" }}
                  sx={{
                    color: "#3A6944",
                    "&:hover": {
                      color: "#1D3522",
                    },
                  }}
                >
                  Ask
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              onClick={() => {
                history.push("/");
              }}
            >
              Buy Nothing
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                exact
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#1D3522",
                  },
                  "&:active": {
                    color: "#1D3522",
                  },
                }}
                component={NavLink}
                to="/"
                activeStyle={{ color: "#1D3522" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#1D3522",
                  },
                }}
                component={NavLink}
                to="/about"
                activeStyle={{ color: "#1D3522" }}
              >
                About
              </Button>
              <Button
                component={NavLink}
                to="/gift"
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#1D3522",
                  },
                }}
                activeStyle={{ color: "#1D3522" }}
              >
                Gift
              </Button>
              <Button
                color="inherit"
                sx={{
                  my: 2,
                  display: "block",
                  textAlign: "center",
                  "&:hover": {
                    color: "#1D3522",
                  },
                }}
                component={NavLink}
                activeStyle={{ color: "#1D3522" }}
                to="/ask"
              >
                Ask
              </Button>
            </Box>
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <>
                    <Button disabled sx={{ my: 2, display: "block" }}>
                      <ScrollToColor>
                        <Typography>Hi {user.nickname}!</Typography>
                      </ScrollToColor>
                    </Button>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt={user.name} src={user.picture} />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem
                          onClick={handleCloseNavMenu}
                          component={NavLink}
                          to="/profile"
                          activeStyle={{ color: "#1D3522" }}
                          sx={{
                            color: "#3A6944",
                            "&:hover": {
                              color: "#1D3522",
                            },
                          }}
                        >
                          Profile
                        </MenuItem>
                        <MenuItem
                          onClick={handleCloseNavMenu}
                          component={NavLink}
                          to="/myposts"
                          activeStyle={{ color: "#1D3522" }}
                          sx={{
                            color: "#3A6944",
                            "&:hover": {
                              color: "#1D3522",
                            },
                          }}
                        >
                          My Posts
                        </MenuItem>
                        <LogoutButton />
                      </Menu>
                    </Box>
                  </>
                ) : (
                  <>
                    <LoginButton />
                    <SignupButton />
                  </>
                )}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollToColor>
  );
}

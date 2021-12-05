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
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import SignupButton from "./SignupButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
  console.log(user);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/" className="nav-color">
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/about" className="nav-color">
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/gift" className="nav-color">
                  Gift
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/ask" className="nav-color">
                  Ask
                </Link>
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
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textAlign: "center",
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textAlign: "center",
              }}
              component={Link}
              to="/about"
            >
              About
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              component={Link}
              to="/gift"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textAlign: "center",
              }}
            >
              Gift
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textAlign: "center",
              }}
              component={Link}
              to="/ask"
            >
              Ask
            </Button>
          </Box>
          {!isLoading && (
            <>
              {isAuthenticated ? (
                <>
                  <Button
                    disabled
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography color="white">Hi {user.nickname}!</Typography>
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
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link
                          textAlign="center"
                          className="user-menu-color"
                          to="/profile"
                        >
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link
                          textAlign="center"
                          className="user-menu-color"
                          to="/myposts"
                        >
                          My Posts
                        </Link>
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
  );
}

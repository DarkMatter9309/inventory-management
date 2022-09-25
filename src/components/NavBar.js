import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";

const pages = ["Inventory", "Upcoming Requirement", "Order status"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenuInventory = () => {
    setAnchorElNav(null);

    props.setTabSelected("Inventory");
  };

  const handleCloseNavMenuUpcoming = () => {
    setAnchorElNav(null);

    props.setTabSelected("Upcoming requirements");
  };

  const handleCloseNavMenuCart = () => {
    setAnchorElNav(null);

    props.setTabSelected("Cart");
  };

  const handleCloseNavMenuStatus = () => {
    setAnchorElNav(null);

    props.setTabSelected("Order status");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{ paddingRight: "1rem" }}>
            <img src={logo} width="130" height="35"></img>
          </div>
          {/* dropdown menu nav bar items */}
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
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={"Inventory"} onClick={handleCloseNavMenuInventory}>
                <Typography textAlign="center">{"Inventory"}</Typography>
              </MenuItem>
              <MenuItem
                key={"Upcoming requirements"}
                onClick={handleCloseNavMenuUpcoming}
              >
                <Typography textAlign="center">
                  {"Upcoming requirements"}
                </Typography>
              </MenuItem>
              <MenuItem key={"Cart"} onClick={handleCloseNavMenuCart}>
                <Typography textAlign="center">{"Cart"}</Typography>
              </MenuItem>
              <MenuItem key={"Order status"} onClick={handleCloseNavMenuStatus}>
                <Typography textAlign="center">{"Order status"}</Typography>
              </MenuItem>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          {/* dropdown */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"Inventory"}
              onClick={handleCloseNavMenuInventory}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {"Inventory"}
            </Button>
            <Button
              key={"Upcoming requirements"}
              onClick={handleCloseNavMenuUpcoming}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {"Upcoming requirements"}
            </Button>
            <Button
              key={"Cart"}
              onClick={handleCloseNavMenuCart}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {"Cart"}
            </Button>
            <Button
              key={"Order status"}
              onClick={handleCloseNavMenuStatus}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {"Order status"}
            </Button>
            {/* {pages.map((page) => (handleCloseNavMenu
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

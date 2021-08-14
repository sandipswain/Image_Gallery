import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, makeStyles } from "@material-ui/core";

const marginR = 24;

const useStyles = makeStyles({
  toolbar: {
    flexGrow: 1
  },
  menubutton: {
    marginRight: marginR
  }
});

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar elevation="1">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menubutton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.toolbar}>Image Gallery</Typography>
          <Typography>Sandip &nbsp;</Typography>
          <Avatar src="/avatar.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

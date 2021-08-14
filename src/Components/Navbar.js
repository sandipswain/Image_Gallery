import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import { Avatar, makeStyles } from "@material-ui/core";

const marginR = 4;
const drawerWidth = 240;

const useStyles = makeStyles({
  toolbar: {
    flexGrow: 1
  },
  menubutton: {
    marginRight: marginR
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`
  }
});

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation="1">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menubutton}
            color="inherit"
            aria-label="menu"
          >
            <BurstModeIcon />
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

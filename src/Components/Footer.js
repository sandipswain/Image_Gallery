import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 230;
const useStyles = makeStyles((theme) => ({
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  centerAlign: {
    align: "center"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className="footer">
        <AppBar
          position="static"
          color="primary"
          className={classes.appbar}
          elevation={0}
        >
          <Toolbar>
            <Typography className="centerAlign" variant="body1" color="inherit">
              Copyright @ 2021, Sandip
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Footer;

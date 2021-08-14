import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  }
});

function Sidebar() {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div></div>
    </Drawer>
  );
}

export default Sidebar;

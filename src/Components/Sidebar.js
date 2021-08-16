import React from "react";
import { makeStyles } from "@material-ui/core";
import SubjectOutlined from "@material-ui/icons/SubjectOutlined";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#ffdd72"
  },
  centerAlign: {
    textAlign: "center",
    marginTop: 25
  }
});

const menuItems = [
  {
    text: "View Gallery",
    icon: <SubjectOutlined color="secondary" />
  },
  {
    text: "Create One",
    icon: <AddCircleIcon color="secondary" />
  }
];

function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        color="secondary"
      >
        <div>
          <Typography variant="h5" className={classes.centerAlign}>
            Profile
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} className="left" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;

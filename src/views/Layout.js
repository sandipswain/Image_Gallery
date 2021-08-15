import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  distance: {
    display: "flex"
  }
});

function Layout() {
  const classes = useStyles();
  return (
    <div className="layout">
      <Navbar />
      <div className={classes.distance}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

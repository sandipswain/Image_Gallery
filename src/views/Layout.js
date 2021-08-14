import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Card />
      <Footer />
    </div>
  );
}

export default Layout;

import React from "react";
import Footer from "./shared/Footer";
import Header from "./shared/header/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

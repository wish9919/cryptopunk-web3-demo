import React from "react";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;

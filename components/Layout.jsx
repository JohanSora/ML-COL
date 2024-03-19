"use client";
import React from "react";
import ImageNext from "./atoms/ImageNext";
import { Button, NextUIProvider } from "@nextui-org/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="flex flex-col w-full items-center">
        <NavBar />
        <div className="lg:w-full 2xl:w-3/4 flex justify-center">
          {children}
        </div>
        <Footer />
      </div>
    </NextUIProvider>
  );
};

export default Layout;

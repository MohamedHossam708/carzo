import React from 'react';
import style from "./Layout.module.css";
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

export default function Layout() {
  const location = useLocation();
  const path = location.pathname.toLowerCase(); // normalize the path

  // More flexible check
  const shouldHideLayout = path === "/signin" || path === "/signup";

  return (
    <>
      <ScrollToTop />
      {!shouldHideLayout && <Navbar />}
      <div className="container w-full mx-auto">
        <Outlet />
      </div>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

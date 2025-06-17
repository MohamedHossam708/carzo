import React from 'react';
import style from "./Layout.module.css";
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './../ScrollToTop/ScrollToTop'; // ← أضفنا ScrollToTop

export default function Layout() {
  return (
    <>
      <ScrollToTop /> {/* ← يشغل ميزة الرجوع لأعلى عند كل انتقال */}
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

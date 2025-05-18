import React from 'react'
import style from "./ScrollToTop.module.css"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // أو "auto" لو مش عايزة سلاسة
    });
  }, [pathname]);

  return null;
}

"use client";
import React from "react";
import "./header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo.src} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dishes">Dishes</a>
          </li>
          <li>
            <a href="/drinks">Drinks</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/receipts">Receipt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

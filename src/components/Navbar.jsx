import React from "react";
import { Image, Menu } from "antd";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className="logoText">
          <Image src={logo} width={40} />{" "}
          <span>Avni Tiles & Decoder</span>
        </NavLink>
      </div>
      <Menu mode="horizontal" className="menu" theme="dark">
        <div key="home" className="menuItem">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            Home
          </NavLink>
        </div>
        <div key="gallery" className="menuItem">
          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            Gallery
          </NavLink>
        </div>
        <div key="about" className="menuItem">
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            About
          </NavLink>
        </div>
        <div key="contact" className="menuItem">
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            Contact
          </NavLink>
        </div>
        <div key="login" className="menuItem">
          <NavLink
            to="/login"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            Login
          </NavLink>
        </div>
      </Menu>
    </div>
  );
};

const styles = {
  link: {
    color: "#ccc",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "4px",
  },
  activeLink: {
    color: "#fff", // Bright white for active link
    backgroundColor: "#333", // Subtle background highlight for active link
  },
};

export default Navbar;

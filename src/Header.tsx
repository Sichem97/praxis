import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header: React.FC = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "white",
        padding: "10px 50px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left section: Logo and links */}
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#FF6D44",
              borderRadius: "50%",
            }}
          ></div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              color: "#2A2A2A",
            }}
          >
            PRAXIS
          </span>
        </div>

        {/* Navigation Links */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: "0",
            padding: "0",
          }}
        >
          {["Browse", "Categories", "Teach", "Enterprise"].map((link) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#2A2A2A",
                  fontSize: "16px",
                  position: "relative",
                  top: "-10px", // To align links slightly above the logo
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section: Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          className="btn btn-outline-secondary"
          style={{
            borderRadius: "20px",
            border: "1px solid #2A2A2A",
            fontSize: "14px",
            color: "#2A2A2A",
            padding: "5px 20px",
          }}
        >
          Log In
        </button>
        <button
          className="btn"
          style={{
            borderRadius: "20px",
            backgroundColor: "#FF6D44",
            color: "white",
            fontSize: "14px",
            padding: "5px 20px",
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;

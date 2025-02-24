import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav style={{ backgroundColor: "#000", color: "#fff" }}>
            <ul style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0 }}>
                <li><Link to="/" aria-label="Homepage" style={{ color: "#fff", textDecoration: "none" }}>Homepage</Link></li>
                <li><Link to="/about" aria-label="About Us" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
                <li><Link to="/login" aria-label="Login Page" style={{ color: "#fff", textDecoration: "none" }}>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;

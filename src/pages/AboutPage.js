import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="center">
      <h2>About us page</h2>
      <Link to="/">To homepage</Link>
    </div>
  );
}

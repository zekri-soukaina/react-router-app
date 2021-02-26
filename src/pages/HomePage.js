import "../App.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { id: 1, name: "laptops" },
  { id: 2, name: "games" },
  { id: 3, name: "sports" },
  { id: 4, name: "food" },
  { id: 5, name: "city" },
];

export default function HomePage() {
  return (
    <div className="center">
      <div className="App-header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/discover">Movies</NavLink>
      </div>
      <h2>Welcome To Home!</h2>

      <div className="divApp">
        {categories.map((c) => {
          return (
            <div className="App">
              <h3>{c.name}</h3>
              <Link to={`/discover/${c.name}`}>Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

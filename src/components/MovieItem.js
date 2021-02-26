import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <div className="center">
      <Link to={`/movie/${movie.imdbID}`}>
        <strong>{movie.Title}</strong>
      </Link>
      ({movie.imdbID})
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          display: "block",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

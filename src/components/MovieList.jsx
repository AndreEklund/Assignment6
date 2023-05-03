import React from "react";
import { Movie, StarContainer } from "../css/styled";
import { StarIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";

const MovieList = ({ movies, deleteMovie }) => {
  /* Renders stars based on the movies rating. */
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <StarIcon
          key={i}
          stroke="black"
          strokeWidth="2"
          fill="yellow"
          height="24"
        />
      );
    }
    return (
      <StarContainer>
        {stars.map((d) => {
          return d;
        })}
      </StarContainer>
    );
  };
  /* Uses the paramater movies to map out all the saved movies. */
  return (
    <ul style={{ background: "antiquewhite", borderRadius: "10px" }}>
      {movies.map((d) => {
        return (
          <li style={{ listStyle: "none" }} key={d.id}>
            <Movie>
              {d.title}
              {renderStars(d.rating)}
              <TrashIcon height="24" onClick={() => deleteMovie(d)} />
            </Movie>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

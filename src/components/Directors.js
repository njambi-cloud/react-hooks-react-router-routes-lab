import React from "react";
import { directors } from "../data";

function Directors() {

  const listOfDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((title) => {
            return <li key={title}>{title}</li>
          })}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {listOfDirectors}
  </div>;
}

export default Directors;
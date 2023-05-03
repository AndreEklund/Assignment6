import React from "react";
import { Button } from "../css/styled";

/* The component saves the current movie by running onSubmit from App. */
const SaveMovie = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Button
        style={{ width: "350px", justifyContent: "center" }}
        type="submit"
      >
        Save movie
      </Button>
    </form>
  );
};

export default SaveMovie;

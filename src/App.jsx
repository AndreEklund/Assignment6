import React, { useEffect, useState } from "react";
import {
  StyledTitle,
  Container,
  InputContainer,
  Input,
  MovieListContainer,
  Select,
  ButtonWrapper,
  Button,
} from "./css/styled";
import SaveMovie from "./components/SaveMovie";
import MovieList from "./components/MovieList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  /* Dynamic states that handle our inputs and movielist. */
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();
  const [movies, setMovies] = useState([]);

  /* When the user submits the form, a movie is added to the movielist, and the form is reset. */
  const onSubmit = (e) => {
    e.preventDefault();
    if (title && rating) {
      setMovies([
        ...movies,
        {
          /* Generate unique id */
          id: uuidv4(),
          title: title,
          rating: rating,
        },
      ]);
      setTitle("");
      setRating("");
    } else if (title) {
      window.alert("Enter rating");
    } else if (rating) {
      window.alert("Enter title");
    } else {
      window.alert("Enter title and rating");
    }
  };
  /* Deletes a movie from the list based on its unique id. */
  const deleteMovie = (movie) => {
    setMovies([
      ...movies.filter((d) => {
        return d.id !== movie.id;
      }),
    ]);
  };

  /* Renders the jsx */
  /* The css is written by using styled components. */
  return (
    <Container>
      <StyledTitle>My movielist</StyledTitle>
      <InputContainer>
        Enter title
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        Enter rating
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={undefined}>...</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
        <SaveMovie title={title} rating={rating} onSubmit={onSubmit} />
      </InputContainer>
      <MovieListContainer>
        <StyledTitle style={{ fontSize: "20px" }}>Your Movies</StyledTitle>
        {movies ? (
          <MovieList movies={movies} deleteMovie={deleteMovie} />
        ) : null}
      </MovieListContainer>
      <ButtonWrapper>
        <Button
          onClick={() =>
            /* Sort movies alphabetically */
            setMovies([
              ...movies.sort((a, b) => a.title.localeCompare(b.title)),
            ])
          }
        >
          Sort Alphabetical
        </Button>
        <Button
          onClick={() =>
            /* Sort movies numerically */
            setMovies([...movies.sort((a, b) => b.rating - a.rating)])
          }
        >
          Sort Numerical
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default App;

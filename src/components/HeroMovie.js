import { CircularProgress, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const HeroMovie = () => {
  const state = useSelector((state) => state);
  const [movie, setMovie] = useState({});

  const randomNumber = Math.floor(Math.random() * 10);

  useEffect(() => {
    setMovie(state.netflixOriginals[randomNumber]);
  }, [randomNumber]);

  console.log(state.netflixOriginals[randomNumber]);
  return (
    <div>
      {movie ? (
        <>
          <Typography>{movie.title}</Typography>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt=""
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default HeroMovie;

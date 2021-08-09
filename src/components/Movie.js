import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import MovieModal from "./MovieModal";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },

  button: {
    margin: 0,
    padding: 0,
  },
});

const Movie = ({ movie, movies }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen} className={classes.button}>
        <img
          className={classes.image + " img"}
          src={
            movies.title === "Netflix Originals"
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          }
          alt={movie.title}
        />
      </Button>
      <MovieModal movie={movie} open={open} setOpen={setOpen} />
    </>
  );
};

export default Movie;

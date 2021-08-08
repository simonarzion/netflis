import {
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    position: "relative",
    padding: "3rem 5vh",
    minHeight: "30rem",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "150px",
      bottom: "0",
      left: "0",
      background: "linear-gradient(to top, #111, transparent)",
    },
  },
  title: {
    fontWeight: "700",
    color: "#fff",
  },
  button: {
    margin: "5px 5px 5px 0px",
    backgroundColor: "#ffffff83",

    "&.white-btn": {
      backgroundColor: "#fff",
    },
  },
});

const HeroMovie = () => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const classes = useStyles();

  return (
    <>
      {selectedMovie ? (
        <div
          className={classes.root}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
          }}
        >
          <div>
            <Typography variant="h4" className={classes.title}>
              {selectedMovie.title}
            </Typography>

            <Button
              variant="contained"
              className={classes.button + " white-btn"}
            >
              Play
            </Button>
            <Button variant="contained" className={classes.button}>
              More info
            </Button>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default HeroMovie;

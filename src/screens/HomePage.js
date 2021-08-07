import { makeStyles } from "@material-ui/core";
import React from "react";
import HeroMovie from "../components/HeroMovie";
import MoviesList from "../components/MoviesList";

const useStyles = makeStyles({
  root: {
    background: "#111",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroMovie />
      <MoviesList />
    </div>
  );
};

export default HomePage;

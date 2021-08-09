import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  selectMovie,
  setActionMovies,
  setComedyMovies,
  setNetflixOriginals,
  setTopRatedMovies,
} from "../redux/actions/moviesActions";
import "swiper/swiper-bundle.css";
import Movie from "./Movie";

const useStyles = makeStyles({
  root: {
    maxWidth: "1600px",
    margin: "auto",
    width: "95%",
  },

  title: {
    color: "#fff",
  },

  swiper: {
    padding: "1.5rem 0",
    "&:hover .movieSlide": {
      opacity: ".2",
    },

    "&.movieSlide:hover~&.movieSlide": {
      transform: " translate3d(1.5rem, 0, 0) scale(1.1)",
    },
  },

  swiper_netflix: {
    padding: "3rem 0",

    "&:hover .movieSlide": {
      opacity: ".2",
    },

    "&.movieSlide:hover~&.movieSlide": {
      transform: " translate3d(1.5rem, 0, 0) scale(1.1)",
    },
  },

  slide: {
    transition: "all .3s ease",
    "&:hover": {
      transform: " translate3d(1.5rem, 0, 0) scale(1.1)",
      opacity: "1 !important",
      zIndex: "999 !important",
    },

    "&:hover~&.movieSlide": {
      transform: " translate3d(3rem, 0, 0)",
    },
  },

  image: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
});

const MoviesList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [moviesInfo, setMoviesInfo] = useState([
    { title: "Top Rated", movies: [] },
    { title: "Netflix Originals", movies: [] },
    { title: "Action", movies: [] },
    { title: "Comedy", movies: [] },
  ]);

  useEffect(() => {
    const fetchTopRatedMovies = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=d5eb8f301824281ae15a37b2a20965c7"
        )
        .then((res) => dispatch(setTopRatedMovies(res.data.results)))
        .then((data) => {
          setMoviesInfo((prevMovie) =>
            prevMovie.map((movie) => {
              if (movie.title === "Top Rated") {
                return { ...movie, movies: [...data.payload] };
              }
              return movie;
            })
          );
        });
    };

    const fetchNetflixOriginalMovies = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=d5eb8f301824281ae15a37b2a20965c7&with_networks=213"
        )
        .then((res) => dispatch(setNetflixOriginals(res.data.results)))
        .then((data) => {
          setMoviesInfo((prevMovie) =>
            prevMovie.map((movie) => {
              if (movie.title === "Netflix Originals") {
                return { ...movie, movies: [...data.payload] };
              }
              return movie;
            })
          );
        });
    };

    const fetchActionMovies = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=d5eb8f301824281ae15a37b2a20965c7&with_genres=28"
        )
        .then((res) => dispatch(setActionMovies(res.data.results)))
        .then((data) => {
          setMoviesInfo((prevMovie) =>
            prevMovie.map((movie) => {
              if (movie.title === "Action") {
                return { ...movie, movies: [...data.payload] };
              }
              return movie;
            })
          );
        });
    };

    const fetchComedyMovies = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=d5eb8f301824281ae15a37b2a20965c7&with_genres=35"
        )
        .then((res) => dispatch(setComedyMovies(res.data.results)))
        .then((data) => {
          setMoviesInfo((prevMovie) =>
            prevMovie.map((movie) => {
              if (movie.title === "Comedy") {
                return { ...movie, movies: [...data.payload] };
              }
              return movie;
            })
          );
        });
    };

    const fetchSelectedMovie = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=d5eb8f301824281ae15a37b2a20965c7"
        )
        .then((res) => dispatch(selectMovie(res.data.results[0])));
    };

    fetchTopRatedMovies();
    fetchNetflixOriginalMovies();
    fetchActionMovies();
    fetchComedyMovies();
    fetchSelectedMovie();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {moviesInfo.map((movies, i) => {
        return (
          <div key={i}>
            <Typography variant="h5" color="primary" className={classes.title}>
              {movies.title}
            </Typography>
            <Swiper
              className={
                movies.title === "Netflix Originals"
                  ? classes.swiper_netflix
                  : classes.swiper + " movieSwiper"
              }
              breakpoints={{
                1378: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
                998: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                625: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                0: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
              }}
            >
              {movies.movies.map((movie, i) => {
                return (
                  <SwiperSlide
                    key={i}
                    className={classes.slide + " movieSlide"}
                  >
                    <Movie movies={movies} movie={movie} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};

// movies info > array 4

// movies

export default MoviesList;

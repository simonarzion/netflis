import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";
import { Button, Grid, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#000",
    outline: "none",
    overflow: "auto",
  },
  modal_content: {
    padding: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",

    flexDirection: "column",
  },
  image_container: {
    position: "relative",
    "@media screen and (max-width: 599px)": {
      display: "none",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      width: "50%",
      height: "100%",
      top: "0",
      left: "0",
      background: "linear-gradient(to right, #000, transparent)",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  text: {
    padding: "5px 0",
    color: "#fff",
    overflow: "hidden",
    maxWidth: "75ch",

    "&.release-date": {
      color: "#aaa",
    },
  },
  button: {
    background: "#ff0000",
    color: "#fff",
  },
  close_modal_btn: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: "2rem",
    color: "#fff",
  },
}));

const MovieModal = ({ movie, open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      className={classes.root}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
    >
      <Slide in={open} direction="up" mountOnEnter unmountOnExit>
        <Grid container className={classes.modal}>
          <Grid item xs={12} sm={6} className={classes.modal_content}>
            <Typography className={classes.text} variant="h4">
              {movie.title}
            </Typography>
            <Typography
              className={classes.text + " release-date"}
              variant="body2"
            >
              {movie.release_date}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {movie.overview}
            </Typography>
            <Button className={classes.button} variant="contained">
              play
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.image_container}>
            <img
              className={classes.image}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt=""
            />
          </Grid>
          <Close
            className={classes.close_modal_btn}
            onClick={handleClose}
          ></Close>
        </Grid>
      </Slide>
    </Modal>
  );
};

export default MovieModal;

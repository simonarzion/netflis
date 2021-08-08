import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeroMovie from "./HeroMovie";

const useStyles = makeStyles({
  navbar: {
    background: "transparent",
    transition: "all .3s ease",

    "&.scrolled": {
      background: "#111",
    },
  },
});

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header>
      <AppBar
        className={scrolled ? classes.navbar + " scrolled" : classes.navbar}
        position="fixed"
        elevation={scrolled ? 10 : 0}
      >
        <Toolbar>
          <IconButton>
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt=""
              style={{ width: "100px" }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <HeroMovie />
    </header>
  );
};

export default Header;

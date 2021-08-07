import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    background: "#050505",
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar className={styles.root} position="static">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          Netflis
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const shadow = "1px 1px 0px #444"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(35),
    margin: theme.spacing(1),
  },
  title: {
    fontSize: "70px",
    color: "rgb(0 128 255)",
    textShadow: shadow,
    marginTop: "10%"
  },
  subtitle: {
    color: "black",
    textTransform: "lowercase",
    textShadow: shadow
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["timo sur{mann}"]} typeSpeed={70} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "DevOps Engineer",
            "Licensed trainer (software development, sports)",
            "Photograph",
            "DJ",
          ]}
          typeSpeed={60}
          backSpeed={40}
          startDelay={2*1000}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
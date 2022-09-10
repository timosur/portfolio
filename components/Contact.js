import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    paddingTop: 100,
    height: "100vh",
    backdropFilter: "blur(3px)",
  },
  heading: {
    color: "#fff",
    textShadow: "1px 1px 0px #444",
    padding: "4rem 0"
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    borderRadius: 0
    // color: "#fff",
    // borderColor: "#fff",
  },
  field: {
    margin: "0.5rem 0rem",
    backgroundColor: "rgb(255 255 255 / 30%)"
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& label": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        // borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        // borderColor: "#fff",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form} action="mailto:portfolio@timosur.com" method="post" enctype="text/plain">
          <Typography variant="h4" align="center" className={classes.heading}>
            Contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="filled"
            inputProps={{ className: classes.input }}
            className={classes.field}
            required
            name="name"
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="filled"
            inputProps={{ className: classes.input }}
            className={classes.field}
            required
            name="email"
            type="email"
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="filled"
            name="message"
            multiline
            required
            rows={4}
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <Button
            variant="contained"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            disableElevation
            size="large"
            type="submit"
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
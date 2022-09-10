import React, { useState } from "react";
import { useRouter } from 'next/router'
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Home from "@material-ui/icons/Home";
import ContactMail from "@material-ui/icons/ContactMail";
import AppsIcon from '@material-ui/icons/Apps';
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import AlbumIcon from '@material-ui/icons/Album';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "absolute",
    top: 40,
    zIndex: "1"
  },
  menuButton: {
    color: "#fff",
    padding: 0,
    cursor: "pointer",
    marginLeft: 30,
    '&:hover': {
      textDecoration: "none",
      color: "rgb(0 128 255)",
      textShadow: "1px 1px 0px #444",
    },
  },
  title: {
    color: "#fff",
    '&:hover': {
      textDecoration: "none",
      color: "rgb(0 128 255)",
      textShadow: "1px 1px 0px #444",
    },
  },
  menuContainer: {
    background: "rgba(0,0,0,0)",
    color: "white",
    textAlign: "center"
  },
  menuItem: {
    paddingTop: 10,
    width: "50%",
    color: "#fff",
    fontSize: "50px"
  },
  menuIconButton: {
    padding: 20,
    width: 160
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  headerLeft: {
    paddingLeft: 50,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      textAlign: "center",
      paddingBottom: 10
    },
  },
  headerRight: {
    textAlign: "right",
    paddingRight: 50,
    color: "#fff",
    textShadow: "1px 1px 0px rgb(0 128 255)"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: "rgb(0 0 0 / 78%)"
  },
  socials: {
    paddingRight: 20,
    display: "inline"
  },
  socialIcon: {
    marginLeft: 10,
    color: "#fff",
    '&:hover': {
      textDecoration: "none",
      color: "rgb(0 128 255)",
      textShadow: "1px 1px 0px #444",
    },
  },
  disabledButton: {
    backgroundColor: "rgb(255 255 255 / 23%) !important"
  },
  imprint: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 100,
    height: 50,
    zIndex: 1
  },
  imprintLink: {
    fontSize: 18,
    color: "#999",
    cursor: "pointer"
  }
}));

const menuItems = [
  { listIcon: <Home fontSize="inherit" />, listText: "home", listPath: "/" },
  { listIcon: <AccountBoxIcon fontSize="inherit" />, listText: "experience", listPath: "/experience" },
  { listIcon: <AssignmentTurnedInIcon fontSize="inherit" />, listText: "portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail fontSize="inherit" />, listText: "contact", listPath: "/contact" },
];

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const nav = () => (
    <Grid>
      <Grid container spacing={0} direction="row" justify="center" alignItems="center" className={classes.menuContainer}>
        {menuItems.map(item => (
          <Grid item xs={12} key={item.listText} className={classes.menuItem}>
            <Button
              variant="contained"
              color="default"
              size="large"
              className={classes.menuIconButton}
              startIcon={item.listIcon}
              disabled={router.pathname == item.listPath}
              href={item.listPath}
              classes={{ disabled: classes.disabledButton }}
            >
              {item.listText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>
      <Grid container justify="center" className={classes.appbar}>
        <Grid item xs={12} sm={6} className={classes.headerLeft}>
          <Link href="/" className={classes.title}>
            <Typography variant="h5">
              timosur
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.headerRight}>
          <Grid component="div" className={classes.socials}>
            <Link href="https://instagram.com/timosur_photography" target="_blank" className={classes.socialIcon}>
              <Instagram fontSize="large" />
            </Link>
            <Link href="https://de.linkedin.com/in/timo-surmann-450758119" target="_blank" className={classes.socialIcon}>
              <LinkedIn fontSize="large" />
            </Link>
            <Link href="https://www.twitch.tv/givgroov" target="_blank" className={classes.socialIcon}>
              <VideocamIcon fontSize="large" />
            </Link>
            <Link href="https://soundcloud.com/randomloopsrecklinghausen" target="_blank" className={classes.socialIcon}>
              <AlbumIcon fontSize="large" />
            </Link>
          </Grid>
          <AppsIcon fontSize="large" onClick={() => setOpen(true)} className={classes.menuButton} />
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={open} onClick={() => setOpen(false)}>
        {nav()}
      </Backdrop>
      <Box className={classes.imprint}>
        <Link className={classes.imprintLink} href="/imprint">Imprint</Link>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
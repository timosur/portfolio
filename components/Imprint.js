import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Image from 'next/image'

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    paddingTop: 100,
    height: "100vh",
    backdropFilter: "blur(3px)",
    color: "#fff"
  },
  heading: {
    color: "#fff",
    textShadow: "1px 1px 0px #444",
    padding: "4rem 0"
  },
}));

const Imprint = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Typography variant="h4" align="center" className={classes.heading}>
          Imprint
        </Typography>
        <Box p={3}>
          <Typography variant="h5">Legal Disclosure</Typography>
          Information in accordance with Section 5 TMG
          <br />
          <br />
          Iltisweg 6<br />
          45663 Recklinghausen
          <Typography variant="h5">Contact Information</Typography>
          Telephone: <Image src="/mobile.png" width={100} height={50}></Image><br />
          E-Mail: <Image src="/email.png" width={100} height={50}></Image><br />
          Internet address: <a href="timosur.com" target="_blank">timosur.com</a><br /><br />
          <Typography variant="h5">Disclaimer</Typography>
          Accountability for content<br />
          The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
          accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for 
          our own content on these web pages. In this matter, please note that we are not obliged to monitor 
          the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. 
          Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per 
          §§ 8 to 10 of the Telemedia Act (TMG).

          <br /><br />Accountability for links<br />
          Responsibility for the content of 
          external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were 
          evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective 
          link immediately.<br /><br />Copyright<br /> Our web pages and their contents are subject to German copyright law. Unless 
          expressly permitted by law, every form of utilizing, reproducing or processing 
          works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. 
          Individual reproductions of a work are only allowed for private use. 
          The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
        </Box>
      </Grid>
    </Box>
  );
};

export default Imprint;
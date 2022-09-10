import React from "react";
import { gql, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import { format } from 'date-fns'

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1
  },
  mainContainer: {
    paddingTop: 100,
    backdropFilter: "blur(3px)",
    width: "100%",
    height: "100%"
  },
  blurredBackground: {
    filter: "blur(4px)",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  heading: {
    color: "#fff",
    textShadow: "1px 1px 0px #444",
    padding: "3rem 0"
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  timeLineGrid: {
    color: "#fff"
  },
  timeLine: {
    maxWidth: 1250
  },
  paper: {
    padding: 20
  },
  chip: {
    marginRight: 5,
    marginTop: 5
  },
  missingOppositeContent: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  }
}));

const GET_EXPERIENCE = gql`
  {
    experiences(sort: "from:desc") {
      id
      title
      from
      to
      description
      current
      technologies {
        id
        name
      }
    }
  }
`;

const Technologies = (technologies, classes) => (
  <Box pt={1}>
    { technologies.map(technology => <Chip key={technology.id} variant="outlined" className={classes.chip} label={technology.name} />) }
  </Box>
);

const Experience = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_EXPERIENCE, {
    notifyOnNetworkStatusChange: true
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  if (loading) return null;

  const arr = data && data.experiences ? data.experiences : [];

  return (
    <Grid className={classes.container}>
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Experience
        </Typography>
        <Grid container spacing={0} direction="row" justify="center" alignItems="center" className={classes.timeLineGrid}>
          <Grid item>
            <Timeline align={matches ? "left" : "alternate"} className={classes.timeLine} classes={{ missingOppositeContent: classes.missingOppositeContent }}>
              {arr.map(item => (
                <TimelineItem key={item.id}>
                  <TimelineOppositeContent className={classes.missingOppositeContent}>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6" component="h1">
                        {item.title}
                      </Typography>
                      <Box fontWeight="fontWeightLight">
                        <Typography variant="inherit">{format(new Date(item.from), "yyyy")} - {item.current ? "now" : format(new Date(item.to), "yyyy")}</Typography>
                      </Box>
                      <Typography>{item.description}</Typography>
                      {item.technologies && item.technologies.length > 0 ? Technologies(item.technologies, classes) : null}
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Experience;
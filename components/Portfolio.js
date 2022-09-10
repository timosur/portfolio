import React from "react";
import { gql, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Config from "../config";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    paddingTop: 100,
    backdropFilter: "blur(3px)",
  },
  heading: {
    color: "#fff",
    textShadow: "1px 1px 0px #444",
    padding: "3rem 0"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const GET_PROJECTS = gql`
  {
    projects {
      id
      title
      description
      demo
      image {
        url
      }
    }
  }
`;

const Portfolio = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_PROJECTS, {
    notifyOnNetworkStatusChange: true
  });

  const classes = useStyles();

  if (!data) return null;

  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Portfolio
      </Typography>
      <Grid container justify="center">
        {/* Projects */}
        {data.projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.name}
                  height="140"
                  image={Config.strapiUrl + project.image.url}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                { project.demo ? (
                  <Button size="small" color="primary">
                    { project.demo }
                  </Button>
                ) : null }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
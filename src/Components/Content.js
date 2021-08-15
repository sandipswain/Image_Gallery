import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MediaCard from "../Components/MediaCard";

const mediaCards = [
  {
    image: "/img/img1.jpg",
    title: "Technology",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit deserunt possimus architecto distinctio perspiciatis sed facereminus dolorum atque necessitatibus."
  },
  {
    image: "/img/img.jpg",
    title: "Sports",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit deserunt possimus architecto distinctio perspiciatis sed facereminus dolorum atque necessitatibus."
  },
  {
    image: "/img/img3.jpg",
    title: "Pets",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit deserunt possimus architecto distinctio perspiciatis sed facereminus dolorum atque necessitatibus."
  }
];

function Content() {
  // const classes = useStyles();
  return (
    <Container p={5}>
      <Grid container spacing={5}>
        {mediaCards.map((mediaCard, i) => {
          return (
            <Grid xs={12} md={6} lg={4} key={i} item>
              <MediaCard {...mediaCard} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Content;

import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 180
  },
  appbar: {
    marginTop: 50
  }
}));

function MediaCard({ image, title, description }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.appbar}></div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon color="secondary" />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon color="textSecondary" />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MediaCard;

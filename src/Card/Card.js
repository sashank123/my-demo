import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "0.5rem",
    width: 300,
    boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)",
    "@media (max-width: 800px)": {
      marginTop: "0.5rem",
      marginLeft: "0.5 rem"
    }
  },
  cardRoot: {
    padding: "14px"
  }
});

export default function ImgMediaCard({ name, url }) {
  const classes = useStyles();
  let id = "";
  for (const letter of url) {
    if (!isNaN(letter)) {
      id += letter;
    }
  }
  id = id.slice(1);

  let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={name}
        height="200"
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
          Pokedex-Id: {id}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This is pokemon {name}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: classes.cardRoot }}>
        <Button variant="contained" color="primary">
          Button
        </Button>
      </CardActions>
    </Card>
  );
}

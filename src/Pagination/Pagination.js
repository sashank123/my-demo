import React from "react";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1976d2",
    color: "#fff",
    height: "2rem",
    width: "2rem",
    borderRadius: "1rem",
    cursor: "pointer",
    boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)"
  },
  buttons: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    margin: "0.5rem"
  }
});

export default function Pagination({ currentPage, increment, decrement }) {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <div onClick={() => decrement(currentPage)} className={classes.button}>
        <NavigateBeforeRoundedIcon classes={{ root: classes.root }} />
      </div>
      <div onClick={() => increment(currentPage)} className={classes.button}>
        <NavigateNextRoundedIcon classes={{ root: classes.root }} />
      </div>
    </div>
  );
}

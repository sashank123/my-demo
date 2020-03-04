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
  disabled: {
    backgroundColor: "grey",
    color: "#fff",
    height: "2rem",
    width: "2rem",
    borderRadius: "1rem",
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

export default function Pagination({ increment, decrement, offset }) {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      <div
        onClick={offset === 0 ? null : () => decrement()}
        className={classes.button}
      >
        <NavigateBeforeRoundedIcon
          classes={{
            root: offset === 0 ? classes.disabled : classes.root
          }}
        />
      </div>
      <div onClick={() => increment()} className={classes.button}>
        <NavigateNextRoundedIcon classes={{ root: classes.root }} />
      </div>
    </div>
  );
}

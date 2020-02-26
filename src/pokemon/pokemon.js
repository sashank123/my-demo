import React, { Component } from "react";
import classes from "./pokemon.css";
import ImgMediaCard from "../Card/Card";

export default class Pokemon extends Component {
  render() {
    let { pokimons, loading } = this.props;

    if (loading) {
      return (
        <div className={classes.cards}>
          <div className={classes.cardsOuter}>Loading....</div>
        </div>
      );
    }

    return (
      <div className={classes.cards}>
        <div className={classes.cardsOuter}>
          {pokimons.map(pokimon => {
            var name =
              pokimon.name.charAt(0).toUpperCase() + pokimon.name.slice(1);

            return (
              <ImgMediaCard name={name} url={pokimon.url} key={pokimon.url} />
            );
          })}
          {pokimons.length < 3 ? <div className={classes.demo}></div> : null}
        </div>
      </div>
    );
  }
}

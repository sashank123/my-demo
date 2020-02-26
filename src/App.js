import React, { Component } from "react";
import classes from "./App.css";
import Pokemon from "./pokemon/pokemon";
import axios from "axios";
import Pagination from "./Pagination/Pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokimons: [],
      currentPage: 1,
      pokimonsPerPage: 3,
      totalPages: 0
    };
  }

  componentDidMount() {
    const fetchPokimons = async () => {
      this.setState(state => ({ loading: true }));
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      this.setState(state => ({
        loading: false,
        pokimons: res.data.results,
        totalPages: Math.ceil(
          res.data.results.length / this.state.pokimonsPerPage
        )
      }));
    };
    fetchPokimons();
  }

  increment = event => {
    if (this.state.currentPage < this.state.totalPages)
      this.setState({
        currentPage: this.state.currentPage + 1
      });
  };

  decrement = event => {
    if (this.state.currentPage > 1)
      this.setState({
        currentPage: this.state.currentPage - 1
      });
  };

  render() {
    const indexOfLastPokimons =
      this.state.currentPage * this.state.pokimonsPerPage;
    const indexOfFirstPokimons =
      indexOfLastPokimons - this.state.pokimonsPerPage;
    const currentPokimons = this.state.pokimons.slice(
      indexOfFirstPokimons,
      indexOfLastPokimons
    );

    return (
      <div className={classes.App}>
        <Pagination
          increment={this.increment}
          decrement={this.decrement}
          currentPage={this.state.currentPage}
        />
        <Pokemon pokimons={currentPokimons} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;

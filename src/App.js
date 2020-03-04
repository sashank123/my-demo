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
      totalPages: 0,
      offset: 0
    };
  }

  componentDidMount() {
    const fetchPokimons = async () => {
      this.setState(state => ({ loading: true }));
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
        params: {
          offset: this.state.offset,
          limit: this.state.pokimonsPerPage
        }
      });
      this.setState(state => ({
        loading: false,
        pokimons: res.data.results
        // totalPages: 7
      }));
    };
    fetchPokimons();
  }

  increment = event => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1,
        offset: this.state.offset + 3
      },
      async () => {
        this.setState(state => ({ loading: true }));
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
          params: {
            offset: this.state.offset,
            limit: this.state.pokimonsPerPage
          }
        });
        this.setState(state => ({
          loading: false,
          pokimons: res.data.results,
          totalPages: Math.ceil(
            res.data.results.length / this.state.pokimonsPerPage
          )
        }));
      }
    );
  };

  decrement = event => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1,
        offset: this.state.offset - 3
      },
      async () => {
        this.setState(state => ({ loading: true }));
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
          params: {
            offset: this.state.offset,
            limit: this.state.pokimonsPerPage
          }
        });
        this.setState(state => ({
          loading: false,
          pokimons: res.data.results
        }));
      }
    );
  };

  render() {
    return (
      <div className={classes.App}>
        <Pagination
          increment={this.increment}
          decrement={this.decrement}
          offset={this.state.offset}
        />
        <Pokemon pokimons={this.state.pokimons} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;

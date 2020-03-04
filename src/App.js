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
      pokimonsPerPage: 3,
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
      }));
    };
    fetchPokimons();
  }

  increment = event => {
    this.setState(
      {
        offset: this.state.offset + 3,
        loading: true
      },
      async () => {
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

  decrement = event => {
    this.setState(
      {
        offset: this.state.offset - 3,
        loading: true
      },
      async () => {
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

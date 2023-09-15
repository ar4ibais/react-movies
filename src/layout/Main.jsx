import React, { Component } from "react";

import Movies from "../components/Movies";

class Main extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=5dad9cc6&s=matrix")
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {
        const { movies } = this.state;
        return (
            <main className="content container">
                {
                    movies.length ? (<Movies movies={this.state.movies} />) : <h5>Loading...</h5>
                }
            </main>
        )
    }
}

export default Main;
import React, { Component } from "react";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=5dad9cc6&s=matrix")
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    onSubmitSearch = (selector) => {
        fetch(`http://www.omdbapi.com/?apikey=5dad9cc6&s=${selector}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    render() {
        const { movies } = this.state;
        return (
            <main className="content container">
                <Search onSubmitSearch={this.onSubmitSearch} />
                {
                    movies.length ? (<Movies movies={this.state.movies} />) : <Preloader />
                }
            </main>
        )
    }
}

export default Main;
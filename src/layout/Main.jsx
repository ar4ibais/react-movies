import React, { Component } from "react";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends Component {
    state = {
        movies: [],
        str: 'matrix'
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=5dad9cc6&s=${this.state.str}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    onSubmitSearch = (selector = this.state.str, id = 'all') => {
        this.setState({ str: selector })
        fetch(`http://www.omdbapi.com/?apikey=5dad9cc6&s=${selector}${id !== 'all' ? `&type=${id}` : ''
            }`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    render() {
        const { movies } = this.state;
        return (
            <main className="content container">
                <Search onSubmitSearch={this.onSubmitSearch} defaultStr={this.state.str} />
                {
                    movies.length ? (<Movies movies={this.state.movies} />) : <Preloader />
                }
            </main>
        )
    }
}

export default Main;
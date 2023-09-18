import React, { Component } from "react";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        str: 'matrix',
        loading: true
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.str}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch(err => {
                console.error(err);
                this.setState({ loading: false })
            })
    }

    onSubmitSearch = (selector = this.state.str, id = 'all') => {
        this.setState({
            str: selector,
            loading: true
        })
        fetch(`https://www.omdbapi.com/?apikey=5dad9cc6&s=${selector}${id !== 'all' ? `&type=${id}` : ''
            }`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch(err => {
                console.error(err);
                this.setState({ loading: false })
            })
    }

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="content container">
                <Search onSubmitSearch={this.onSubmitSearch} defaultStr={this.state.str} />
                {
                    loading ? <Preloader /> : (<Movies movies={movies} />)
                }
            </main>
        )
    }
}

export default Main;
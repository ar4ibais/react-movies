import React, { useState, useEffect } from "react";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [str, setStr] = useState('matrix');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, [str]);

    const onSubmitSearch = (selector = str, id = 'all') => {
        setStr(selector);
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${selector}${id !== 'all' ? `&type=${id}` : ''
            }`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }

    return (
        <main className="content container">
            <Search onSubmitSearch={onSubmitSearch} defaultStr={str} />
            {
                loading ? <Preloader /> : (<Movies movies={movies} />)
            }
        </main>
    )
}

export default Main;
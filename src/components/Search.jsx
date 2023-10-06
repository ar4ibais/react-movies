import React, { useState } from "react";

const Search = ({ defaultStr, onSubmitSearch }) => {

    const [search, setSearch] = useState(defaultStr);
    const [id, setId] = useState('all')

    const handleKey = (e) => {
        if (e.key == 'Enter') {
            onSubmitSearch(search, id);
        }
    }

    const handleFilter = (e) => {
        setId(e.target.getAttribute('id'));
        onSubmitSearch(search, e.target.getAttribute('id'));
    }

    return (
        <>
            <form
                className="row"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="input-field col s12">
                    <input
                        id="Search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button
                        type="sumbit"
                        className="btn search-btn"
                        onClick={() => onSubmitSearch(search, id)}
                    >Search</button>
                </div>
            </form>
            <div className="filters-btns">
                <label>
                    <input
                        className="with-gap"
                        name="group1"
                        type="radio"
                        id="all"
                        onChange={handleFilter}
                        checked={id == 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap"
                        name="group1"
                        id="movie"
                        type="radio"
                        onChange={handleFilter}
                        checked={id == 'movie'}
                    />
                    <span>Only Movies</span>
                </label>
                <label>
                    <input className="with-gap"
                        name="group1"
                        type="radio"
                        id="series"
                        onChange={handleFilter}
                        checked={id == 'series'}
                    />
                    <span>Only Series</span>
                </label>
            </div>
        </>
    )
}

export default Search;
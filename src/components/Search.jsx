import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.defaultStr,
            id: 'all'
        }
    }
    handleKey = (e) => {
        const { onSubmitSearch } = this.props;

        if (e.key == 'Enter') {
            onSubmitSearch(this.state.search, this.state.id);
        }
    }
    handleFilter = (e) => {
        const { onSubmitSearch } = this.props;
        this.setState(
            () => ({ id: e.target.getAttribute('id') }),
            () => {
                onSubmitSearch(this.state.search, this.state.id)
            })
    }
    render() {
        const { onSubmitSearch } = this.props;
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
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKey}
                        />
                        <button
                            type="sumbit"
                            className="btn search-btn"
                            onClick={() => onSubmitSearch(this.state.search, this.state.id)}
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
                            onChange={this.handleFilter}
                            checked={this.state.id == 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap"
                            name="group1"
                            id="movie"
                            type="radio"
                            onChange={this.handleFilter}
                            checked={this.state.id == 'movie'}
                        />
                        <span>Only Movies</span>
                    </label>
                    <label>
                        <input className="with-gap"
                            name="group1"
                            type="radio"
                            id="series"
                            onChange={this.handleFilter}
                            checked={this.state.id == 'series'}
                        />
                        <span>Only Series</span>
                    </label>
                </div>
            </>
        )
    }
}

export default Search;
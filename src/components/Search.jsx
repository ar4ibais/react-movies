import React, { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render() {
        const { onSubmitSearch } = this.props;
        return (
            <form
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitSearch(this.state.search);
                }}
            >
                <div className="input-field col s12">
                    <input
                        id="Search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                    />
                    <button type="sumbit" className="btn search-btn">Search</button>
                </div>
            </form>
        )
    }
}

export default Search;
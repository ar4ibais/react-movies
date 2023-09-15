import React, { Component } from "react";

class Search extends Component {
    state = {
        search: ''
    }
    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="Search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => { this.setState({ search: e.target.value }) }}
                    />
                </div>
            </div>
        )
    }
}

export default Search;
import React, {Component} from "react";
import "./search-panel.css"

class SearchPanel extends Component {

    state = {
        search: ''
    }

    onSearch = (e) => {
        this.setState({search: e.target.value})
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="search"
                value={this.state.search}
                onChange={this.onSearch}
            />)
    }


}

export default SearchPanel
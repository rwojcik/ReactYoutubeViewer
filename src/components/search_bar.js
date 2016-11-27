import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: props.term || '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar offset-sm-2 col-sm-8">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search YouTube..."
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </div>
    );
  }
}

export default SearchBar;

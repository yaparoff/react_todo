import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  onSearchField = (e) => {
    const searchValue = e.target.value;
    this.setState({ searchValue });
    this.props.onSearchField(searchValue);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={ this.state.searchValue }
        onChange={  this.onSearchField }
      />
    );
  }
}

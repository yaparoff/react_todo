import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // testIsOver: false,
    };
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
      />
    );
  }
}
import React, { Component } from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { onAddItem } = this.props;

    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={ onAddItem }
        >Add Item</button>
      </div>
    );
  }
}
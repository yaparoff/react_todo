import React, { Component } from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: ''
    };
  }

  onLabelChange(e) {
    this.setState({
      label: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {

    return (
      <form className="item-add-form d-flex" onSubmit={ (e) => this.submitHandler(e) }>
        <input
          type="text"
          className="form-control col-9"
          placeholder="What needs to be done"
          onChange={ (e) => this.onLabelChange(e) }
          value={ this.state.label }
        />
        <button
          className="btn btn-outline-secondary col-3"
        >Add Item</button>
      </form>
    );
  }
}
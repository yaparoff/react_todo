import React, { Component } from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: [
        {
          name: 'all',
          text: 'All'
        },
        {
          name: 'active',
          text: 'Active'
        },
        {
          name: 'done',
          text: 'Done'
        }
      ]
    };
  }

  render() {
    const { filter, onFilterItems } = this.props;

    const buttons = this.state.btns.map(({ name, text }) => {
      const isActive = name === filter;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

      return (
        <button
          key={name}
          type="button"
          className={ classNames }
          onClick= { () => onFilterItems(name) }>
          { text }
        </button>
      )
    });

    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
}

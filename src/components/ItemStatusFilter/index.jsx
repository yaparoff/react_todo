import React, { Component } from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btns: [
        {
          id: 'all',
          text: 'All',
          active: true
        },
        {
          id: 'active',
          text: 'Active',
          active: false
        },
        {
          id: 'done',
          text: 'Done',
          active: false
        }
      ]
    };
  }

  handleClick(id) {
    this.setState((state) => {
      state.btns.map(btn => {
        btn.active = false;
        if (btn.id === id) {
          btn.active = true;
          this.props.onGetTypeFilter(btn.id)
        }
      });



      return {

      }
    })
  }

  render() {




    let classNames = 'btn';

    // if (active) {
    //   classNames += ' btn-info';
    // } else {
    //   classNames += ' btn-outline-secondary';
    // }

    return (
      <div className="btn-group">

        { this.state.btns.map(btn =>
          <button
            key={ btn.id }
            type="button"
            className={ btn.active ?  'btn btn-info' : 'btn btn-outline-secondary' }
            onClick={
              () => this.handleClick(btn.id)
            }
          > { btn.text }</button>
        )}

      </div>
    );
  }
}

import React, { Component } from 'react';
import TodoListItem from '../TodoListItem';
import './todo-list.css';


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // testIsOver: false,
    };
  }

  render() {
    const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;


    const elements = todos.map((item) => {
      return (
        <li key={ item.id } className="list-group-item">
          <TodoListItem
            label={ item.label }
            important={ item.important }
            onDeleted={ () => onDeleted(item.id) }
            onToggleImportant={ () => onToggleImportant(item.id) }
            onToggleDone={ () => onToggleDone(item.id) }
          />
        </li>
      )
    });

    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
  }
}
import React, { Component } from 'react';
import TodoList from '../../components/TodoList';
import SearchPanel from '../../components/SearchPanel';
import AppHeader from '../../components/AppHeader';
import ItemStatusFilter from '../../components/ItemStatusFilter';
import ItemAddForm from '../../components/ItemAddForm';


export class App extends Component {
  constructor(props) {
    super(props);
    this.maxId = 100;
    this.state = {
      todoData: [
        { label: 'Learn React', important: false, id: 1 },
        { label: 'Learn Redux', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    };
  }

  addItem(text) {

    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState((state) => {
      const newArray = [
        ...state.todoData,
        newItem
      ];

      return {
        // state.todoData.push(newItem) - не стоит так делать
        todoData: newArray
      }
    });
  }

  deleteItem(id) {
    this.setState((state) => {
      const index = state.todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...state.todoData.slice(0, index),
        ...state.todoData.slice(index + 1)
      ];
      // метод splice не рекомендуют использовать, т.к. изменяет существующий state
      return {
        todoData: newArray
      }
    })
  }

  onToggleImportant(id) {
    console.log('Toggle Important', id)
  };

  onToggleDone(id) {
    console.log('Toggle Done', id)
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ todoData }
          onDeleted={ (id) => this.deleteItem(id) }
          onToggleImportant={ (id) => this.onToggleImportant(id) }
          onToggleDone={ (id) => this.onToggleDone(id) }
        />

        <ItemAddForm
          onAddItem={ ()=> this.addItem('Hello') }
        />
      </div>
    );
  }
}
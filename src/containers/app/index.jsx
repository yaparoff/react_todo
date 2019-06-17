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
        { label: 'Learn React', done: false, important: false, id: 1 },
        { label: 'Learn Redux', done: false, important: true, id: 2 },
        { label: 'Have a lunch', done: false, important: false, id: 3 }
      ],
      searchValue: '',
      filterValue: 'all'
    };
  }

  onSearchField = (searchValue) => {
    this.setState({ searchValue });
  };

  search(items, searchValue) {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) > -1;
    });
  }

  onFilterItems = (filterValue) => {
    this.setState({ filterValue });
  };

  filterItems(items, filterValue) {
    if (filterValue === 'active') {
      return items.filter((item) => !item.done);
    } else if (filterValue === 'done') {
      return items.filter((item) => item.done);
    } else {
      return items;
    }
  }

  addItem(text) {

    const newItem = {
      label: text,
      done: false,
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
    console.log(id);
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

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);

    const oldItem = arr[index];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  onToggleImportant(id) {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'important')
      }
    });
    console.log('Toggle Important', id)
  };

  onToggleDone(id) {
    this.setState((state) => {
      return {
        todoData: this.toggleProperty(state.todoData, id, 'done')
      }
    });
    console.log('Toggle Done', id)
  };

  render() {
    const { todoData, searchValue, filterValue } = this.state;
    const visibleItems = this.search(
        this.filterItems(todoData, filterValue), searchValue);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;


    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearchField={ this.onSearchField }
          />
          <ItemStatusFilter
              filter={ filterValue }
              onFilterItems={ this.onFilterItems }
          />
        </div>

        <TodoList
          todos={ visibleItems }
          onDeleted={ (id) => this.deleteItem(id) }
          onToggleImportant={ (id) => this.onToggleImportant(id) }
          onToggleDone={ (id) => this.onToggleDone(id) }
        />

        <ItemAddForm
          onAddItem={ (text) => this.addItem(text) }
        />
      </div>
    );
  }
}

import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList.';
import './App.css';

const App = () => {
  const { todos, completedTodos } = useSelector((state) => state.TodoReducers);

  return (
    <div className='App'>
      <div className='form-container'>
        <h3>Todo List</h3>
        <TodoForm />
      </div>
      {todos.length > 0 || completedTodos.length > 0 ? (
        <TodoList />
      ) : (
        <p>No todos yet!</p>
      )}
    </div>
  );
};

export default App;
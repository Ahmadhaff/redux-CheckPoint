import React from 'react';
import { useSelector } from 'react-redux';
import CompletedTodos from '../completedtodos/CompletedTodos';
import TodoItem from '../todoItem/TodoItem';
import './todoList.css';

const TodoList = () => {
  const { todos } = useSelector(state => state.TodoReducers);

  return (
    <div className="todo-list-container">
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <CompletedTodos/>
    </div>
  );
};

export default TodoList;
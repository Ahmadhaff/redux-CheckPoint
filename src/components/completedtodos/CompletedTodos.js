import React from 'react';
import {  useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';

const CompletedTodos = () => {
  const completedTodos = useSelector(state => state.TodoReducers.completedTodos);


  return (
    <div>
      <h3>Completed Todos</h3>
      <ul>
        {completedTodos.map(todo => (
          <TodoItem completedTodos={completedTodos}key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash, FaPencilAlt, FaSave, FaTimes } from 'react-icons/fa';
import { completeTodo, deleteCompletedTodos, deleteTodo, updateTodo } from '../../redux/actions/TodoActions';
import './todoItem.css';

const TodoItem = ({ todo , completedTodos}) => {
  
  
  const [isEditing, setIsEditing] = useState(false);



  const [updatedTodo, setUpdatedTodo] = useState(todo.text);



  const dispatch = useDispatch();

  
  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id));
    if (completedTodos) {
      dispatch(deleteCompletedTodos(todo.id));
    }
  };

  
  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  
  const handleInputChange = (e) => {
    setUpdatedTodo(e.target.value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({
      id: todo.id,
      text: updatedTodo,
      isCompleted: todo.isCompleted
    }));
    setIsEditing(false);
  };
  
  const handleCancelSubmit = () => {
    setIsEditing(false);
  };

  const handleCheckboxChange = (e) => {
    const isCompleted = e.target.checked;

    if (isCompleted) {
      dispatch(completeTodo({
        id: todo.id,
        text: todo.text,
        isCompleted: true
      }));
    } else {
      dispatch(updateTodo({
        id: todo.id,
        text: todo.text,
        isCompleted: false
      }));
    }
  };
  
  return (
    <li className={isEditing ? 'editing' : ''}>
      {isEditing ? (
        <form className="updateform" onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            placeholder="Update todo..."
            value={updatedTodo}
            onChange={handleInputChange}
          />
          <FaSave onClick={handleUpdateSubmit} className="save-button" />
          <FaTimes onClick={handleCancelSubmit} className="cancel-button" />
        </form>
      ) : (
        <>
          <div className="todo-item">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleCheckboxChange}
            />
            <span className={`todo-text${todo.isCompleted ? ' completed' : ''}`}>
              {todo.text}
            </span>
          </div>
          <div className="todo-buttons">
            <FaPencilAlt onClick={handleUpdateClick} className="edit-button" />
            {(!completedTodos || todo.isCompleted) && (
              <FaTrash onClick={handleDeleteClick} className="delete-button" />
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
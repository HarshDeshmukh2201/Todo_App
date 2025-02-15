import React from 'react';
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Todos = ({ todos, removeTodo, toggleTodo, handleEditClick, editFormVisibility }) => {
  return (
    <div className="todos-container">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className='todo-box background'>
            <div className='content d-flex flex-row align-items-center gap-2 mb-3'>
              {!editFormVisibility && (
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
              )}
              <p className='m-0' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.todo}
              </p>
            </div>
            <div className='actions-box'>
              {!editFormVisibility && (
                <>
                  <span onClick={() => handleEditClick(todo)}>
                    <FaPen className='text-primary fw-bold' />
                  </span>
                  <span onClick={() => removeTodo(todo.id)}>
                    <MdDelete size={24} className='text-danger fw-bold' />
                  </span>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-3">No todos available</p>
      )}
    </div>
  );
};

export default Todos;

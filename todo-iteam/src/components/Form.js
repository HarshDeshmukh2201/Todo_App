import React, { useState, useEffect } from 'react';
import { MdAddBox } from "react-icons/md";

const Form = ({ addTodo, editFormVisibility, editTodo, handleEditSubmit, cancelUpdate }) => {
  const [todoValue, setTodoValue] = useState('');
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setEditValue(editTodo?.todo || '');
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoValue.trim()) return;

    let todoObj = {
      id: Date.now(),
      todo: todoValue.trim(),
      completed: false
    };

    addTodo(todoObj);
    setTodoValue(''); // Clear input field
  };

  const editSubmit = (e) => {
    e.preventDefault();
    if (!editValue.trim()) return;

    let editedObj = {
      id: editTodo.id,
      todo: editValue.trim(),
      completed: editTodo.completed
    };

    handleEditSubmit(editedObj);
  };

  return (
    <>
      {!editFormVisibility ? (
        <form className='form-group custom-form' onSubmit={handleSubmit}>
          <label><b>Add your todo-items</b></label>
          <div className='input-and-btn mt-2'>
            <input type="text" className='form-control' required
              value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <button type="submit" className='bg-white p-2 ms-4 fw-bolder rounded-circle text-primary border border-primary'>
              <MdAddBox size={24} />
            </button>
          </div>
        </form>
      ) : (
        <form className='form-group custom-form' onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div className='input-and-btn'>
            <input type="text" className='form-control' required
              value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            <button type="submit" className='btn btn-secondary btn-md'>UPDATE</button>
          </div>
          <button type="button" className='btn btn-primary btn-md back-btn' onClick={cancelUpdate}>BACK</button>
        </form>
      )}
    </>
  );
};

export default Form;

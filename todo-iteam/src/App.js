import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import Todos from "./components/Todos";

function App() {
  const defaultTodos = [
    { id: 1, todo: "Buy groceries", completed: false },
    { id: 2, todo: "Read a book", completed: true },
    { id: 3, todo: "Go for a walk", completed: false }
  ];

  const [todos, setTodos] = useState(() => {
    // ✅ Load from localStorage OR set default todos if empty
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos && savedTodos.length > 0 ? savedTodos : defaultTodos;
  });

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  // ✅ Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ✅ Add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // ✅ Remove a single todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // ✅ Delete all todos
  const deleteAll = () => {
    setTodos([]);
  };

  // ✅ Toggle completed status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // ✅ Open the edit form
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  // ✅ Submit edited todo
  const handleEditSubmit = (updatedTodo) => {
    setTodos(todos.map(todo => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
    cancelUpdate();
  };

  // ✅ Cancel edit mode
  const cancelUpdate = () => {
    setEditFormVisibility(false);
    setEditTodo(null);
  };

  return (
    <div className="vh-100 gradient-custom text-black">
      <div className="wrapper container py-5 h-100 position-relative">
        <h1 className="text-center font-weight-bold">Todo-list</h1>
        <Form 
          addTodo={addTodo} 
          editFormVisibility={editFormVisibility} 
          editTodo={editTodo} 
          handleEditSubmit={handleEditSubmit} 
          cancelUpdate={cancelUpdate} 
        />
        <Todos 
          todos={todos} 
          removeTodo={removeTodo} 
          toggleTodo={toggleTodo} 
          handleEditClick={handleEditClick} 
          editFormVisibility={editFormVisibility} 
        />
        {todos.length > 0 && (
          <button className='btn btn-danger btn-md delete-all my-4' onClick={deleteAll}>
            DELETE ALL
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

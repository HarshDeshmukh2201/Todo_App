
import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Todo from "./components/Todos"
import {useDispatch, useSelector} from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';

function App() {
  const dispatch = useDispatch();
  
  const todos = useSelector((state)=>state.operationsReducer);
   
    const [editFormVisibility, setEditFormVisibility]=useState(false);


    const [editTodo, setEditTodo]=useState('');
  
   
    const handleEditClick=(todo)=>{
      setEditFormVisibility(true);
      setEditTodo(todo);
    }
  
    // back button click
    const cancelUpdate=()=>{
      setEditFormVisibility(false);
    }
  
  return (
    <div className="vh-100 gradient-custom  " >
      <div className="wrapper  container py-5 h-100">
    <br></br>
    <h1 className="text-center fort-weight-bold ">TODO-List</h1>
    <Form editFormVisibility={editFormVisibility} editTodo={editTodo}   cancelUpdate={cancelUpdate}/>
    <Todo handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
    {todos.length > 0&&(
        <button className='btn btn-danger btn-md delete-all my-7'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}

  
  </div>
    </div>
    
  );
}

export default App;

import React, { useContext, useRef } from 'react'
import { TodoContext } from '../store/TodoContext';

const AddTodo = () => {

  const todoNameRef = useRef();
  const todoDateRef = useRef();
  const { onAddClicked } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoName = todoNameRef.current.value;
    const todoDate = todoDateRef.current.value;

    if (!todoDate || !todoName) {
      alert("Please enter both todo name and date!");
      return;
    }

    todoNameRef.current.value = "";
    todoDateRef.current.value = "";

    onAddClicked(todoName, todoDate);
  }

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-5'>
          <input type='text' placeholder='enter todo here' ref={todoNameRef} />
        </div>

        <div className='col-4'>
          <input type='date' ref={todoDateRef} />
        </div>

        <div className='col-3'>
          <button className='btn btn-info' type='submit'>+</button>
        </div>

      </div>
    </form>
  )
}

export default AddTodo
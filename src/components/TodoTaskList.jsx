import React, { useContext } from 'react'
import { TodoContext } from '../store/TodoContext'

const TodoTaskList = ({ todoName, todoDate }) => {

  const { onDelClicked } = useContext(TodoContext);

  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='col-5'>
          <p>{todoName}</p>
        </div>

        <div className='col-4'>
          <p>{todoDate}</p>
        </div>

        <div className='col-3'>
          <button className='btn btn-danger' onClick={() => onDelClicked(todoName)}><strong>-</strong></button>
        </div>

      </div>
    </div>
  )
}

export default TodoTaskList
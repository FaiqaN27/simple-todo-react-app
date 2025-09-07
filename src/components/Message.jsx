import React, { useContext } from 'react'
import { TodoContext } from '../store/TodoContext'

const Message = () => {
  const { todoTasks } = useContext(TodoContext);
  return (
    <>
      {todoTasks.length === 0 ? <h2 className='display-6 text-center'>Nothing To Do........ ENJOY YOUR DAY 😊</h2> : null}
    </>
  )
}

export default Message
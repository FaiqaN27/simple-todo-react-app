import React, { useContext } from 'react'
import TodoTaskList from './TodoTaskList'
import { TodoContext } from '../store/TodoContext'

const TodoList = () => {
  const { todoTasks } = useContext(TodoContext);

  return (
    <>
      {todoTasks.map((task) => (
        <TodoTaskList
          key={task.name}
          todoName={task.name}
          todoDate={task.date}
        />
      ))}
    </>
  )
}

export default TodoList
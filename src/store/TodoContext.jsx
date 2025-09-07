import { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext({
  todoTasks: [],
  onAddClicked: () => { },
  onDelClicked: () => { }
})

//pure function
const todoTaskReducer = (currTodoTask, action) => {
  let newTodoTasks = currTodoTask;
  if (action.type === "ADD_TASK") {
    newTodoTasks = [...currTodoTask, { name: action.payload.todoName, date: action.payload.todoDate }]
  }
  else if (action.type === "DEL_TASK") {
    newTodoTasks = currTodoTask.filter((todotask) => todotask.name !== action.payload.taskName)
  }
  return newTodoTasks;
}

const TodoContextProvider = ({ children }) => {
  const [todoTasks, dispatchTodoTask] = useReducer(todoTaskReducer, [], () => {
    const savedTodos = localStorage.getItem('todoTasks');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));
  }, [todoTasks]);

  const onAddClicked = (todoName, todoDate) => {
    const newTask = {
      type: 'ADD_TASK',
      payload: {
        todoName, todoDate
      }
    }
    dispatchTodoTask(newTask);
  }

  const onDelClicked = (todoTaskName) => {
    const delTask = {
      type: "DEL_TASK",
      payload: {
        taskName: todoTaskName
      }
    }
    dispatchTodoTask(delTask);
  }

  return (
    <TodoContext.Provider
      value={{
        todoTasks, onAddClicked, onDelClicked
      }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;
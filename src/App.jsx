import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import AddTodo from './components/AddTodo'
import Message from './components/Message'
import TodoContextProvider from './store/TodoContext'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
      <TodoContextProvider>
        <center>
          <Heading />
          <AddTodo />
          <Message />
          <TodoList />
        </center>
      </TodoContextProvider>
    </>
  )
}

export default App
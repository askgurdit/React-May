import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Learn About Redux Toolkit
    </h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App

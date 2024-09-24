import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComp from './components/ClassComp'
import  FunctionComp from './components/FunctionComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ClassComp empname='Hello' age={34}></ClassComp>
        <FunctionComp stname="anish" age={24}/>
      </div>
      
    </>
  )
}

export default App

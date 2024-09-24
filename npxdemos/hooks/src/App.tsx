import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Counter from './components/Counter'
import Fibonacci from './components/Fibonacci'
import ButtonCallBack from './components/ButtonCallBack'
import TextInputWithFocusButton from './components/TextInputWithFocusButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
      <Timer/>
      <Fibonacci/>
      <TextInputWithFocusButton/>

    </div>
  )
}

export default App

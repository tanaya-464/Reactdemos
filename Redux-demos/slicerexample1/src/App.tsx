import { useState } from 'react'
import './App.css'
import OrderList from './components/OrderList'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick ={()=>OrderList("helo")}>Order</button>
        <button onClick ={()=>UserList("helo")}>User</button>
        </div>
    </>
  )
}

export default App

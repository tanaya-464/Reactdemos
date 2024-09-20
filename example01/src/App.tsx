import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Heading2 from './components/Heading2'

function App() {
  return(
    <>
    <Heading title={"Hello react"}/>
    <Heading2 title={"This is the subheading"}/>
    </>
  )
  }

export default App

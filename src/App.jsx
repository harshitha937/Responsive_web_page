import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Webpage from './Webpage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Webpage/>
    </>
  )
}

export default App

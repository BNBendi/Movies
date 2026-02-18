import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from "./MainPage"
import Player from "./Player"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  )
}

export default App

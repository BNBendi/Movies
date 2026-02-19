import { Routes, Route } from "react-router-dom"
import "./App.css"
import Main from "./MainPage"
import Player from "./Player"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
         <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  )
}

export default App

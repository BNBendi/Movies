import { Routes, Route } from "react-router-dom"
import "./App.css"
import Main from "./MainPage"
import Player from "./Player"
import Booking from "./BookingSite"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Thanks from "./thank"



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
         <Route path="/player/:id" element={<Player />} />
         <Route path="/booker/:id" element={<Booking />} />
         <Route path="/success" element={<Thanks />} />
      </Routes>
      
      
    </>
  )
}

export default App

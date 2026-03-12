import './App.css'
import { useNavigate } from 'react-router-dom'
import Cards from "./Cards"
import Footer from "./components/Footer"
import movies from "./data";


function App() {
  const navigate = useNavigate()
    
  return (
    
    <>
      <h1>Reservation successful</h1>
      <h2>Thank you for purchase</h2>
    </>
  )
}

export default App

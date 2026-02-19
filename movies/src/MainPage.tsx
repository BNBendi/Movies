import './App.css'
import { useNavigate } from 'react-router-dom'
import Cards from "./Cards"

function App() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <div className="hero-header">
        <div className="overlay">
          <h1 className="title">The Godfather</h1>
          <button
            className="watch-btn"
            onClick={() => navigate("/player/238")}
          >
            Watch Now
          </button>
        </div>
      </div>
      <div className="cards">
        <Cards/>
      </div>
      
    </div>
  )
}

export default App

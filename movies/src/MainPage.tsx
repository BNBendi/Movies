import './App.css'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="hero-header">
        <div className="overlay">
          <h1 className="title">The Godfather</h1>
          <button className="watch-btn"
           onClick={() => navigate('/player')}>Watch Now</button>
        </div>
      </header>
    </div>
  )
}

export default App

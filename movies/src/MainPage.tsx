import './App.css'
import { useNavigate } from 'react-router-dom'
import Cards from "./Cards"
import Footer from "./components/Footer"
import movies from "./data";

function randomMovie(max) {
  return Math.floor(Math.random() * max);
}

const movieNO: number = randomMovie(movies.length)

function App() {
  const navigate = useNavigate()

  return (
    
    <>
      <div className="app">
        <div className="hero-header" style={{
          backgroundImage: `url("${movies[movieNO].header}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 30%",
          backgroundSize: "cover"
        }}>
          <div className="overlay">
            <h1 className="title">{movies[movieNO].title}</h1>
            <button
              className="watch-btn"
              onClick={() => navigate("/player/238")}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="cards">
          <Cards />
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App

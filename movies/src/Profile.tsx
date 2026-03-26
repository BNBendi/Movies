import { useNavigate } from 'react-router-dom'
import Cards from "./Cards"
import Footer from "./components/Footer"
import movies from "./data";

function randomMovie(max: number) {
  return Math.floor(Math.random() * max);
}

const movieNO: number = randomMovie(movies.length)

function App() {
  const navigate = useNavigate()

  return (
    
    <>
      <h1>Coming soon</h1>
      <Footer />
    </>
  )
}

export default App

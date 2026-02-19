import { useState } from 'react'
import { useParams } from "react-router-dom";
import './App.css'


function App() {
  const { id } = useParams();
  return (
    
    <div className="video-container">
      <iframe
        src={`https://www.vidking.net/embed/movie/${id}`}
        allowFullScreen
      />
    </div>
  )
}


export default App
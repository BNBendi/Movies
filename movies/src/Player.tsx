import { useState } from 'react'
import { useParams } from "react-router-dom";
import Bookheader from './components/Bookheader';


function App() {
  const { id } = useParams();
  return (
    
    <>
      <Bookheader />
    </>
  )
}


export default App

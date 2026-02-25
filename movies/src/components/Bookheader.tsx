import React from 'react'
import { useNavigate } from 'react-router'
import Bookfooter from './Bookfooter'

const Bookheader = () => {
    /*const navigate = useNavigate() */
    return (
        <div className="app">
            <div className="hero-header">
                <div className="overlay">
                <h1 className="title">The Godfather</h1>ű
                <h2 style={{color: "white", fontSize: "1.5rem", margin:"22px", maxWidth:"40%"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatem numquam quos ullam quas nemo, sunt reiciendis excepturi libero laborum minus inventore officia minima atque adipisci ea nihil enim fugit.</h2>
                <button
                    className="watch-btn"
                    onClick={() => window.open("https://www.youtube.com/watch?v=UaVTIH8mujA")}
                >
                    Watch Trailer
                </button>
                </div>
            </div>

            <Bookfooter/>
        </div>
    )
}

export default Bookheader
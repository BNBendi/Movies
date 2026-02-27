import React from 'react'
import { useNavigate } from 'react-router'
import { useParams } from "react-router-dom";
import Bookfooter from './Bookfooter'
import movies from "./data"; 

const Bookheader = () => {

    /*const navigate = useNavigate() */
    
    const { id } = useParams();
    const movie = movies.find(m => m.id === Number(id));

    if (!movie) {
        return <div style={{ color: "white" }}>Movie not found {id}</div>;
    }

    return (
        <div className="app">
            <div className="hero-header" style={{
                backgroundImage: `url("${movie.header}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 30%",
                backgroundSize: "cover"
            }}>
                <div className="overlay">
                    <h1 className="title">{movie?.title}</h1>
                    <h2 style={{ color: "white", fontSize: "1.5rem", margin: "22px", maxWidth: "40%" }}>{movie.lore}</h2>
                    <button
                        className="watch-btn"
                        onClick={() => window.open(`${movie?.trailer}`)}
                    >
                        Watch Trailer
                    </button>
                </div>
            </div>

            <Bookfooter />
        </div>
    )
}

export default Bookheader

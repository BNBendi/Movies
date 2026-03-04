import { useNavigate } from "react-router-dom";
import "./App.css";
import movies from "./data"; 

function App() {
    const navigate = useNavigate();

    return (
        <>
            <h1 style={{ textAlign: "center", color: "white" }}>Red movies</h1>

            <div className="cards-row">
                {movies.slice(0, 4).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => {
                                navigate(`/player/${movie.id}`);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ))}
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Yellow movies</h1>

            <div className="cards-row">
                {movies.slice(4, 8).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => {
                                navigate(`/player/${movie.id}`);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ))}
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Motorsport movies</h1>
            <div className="cards-row">
                {movies.slice(8, 12).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => {
                                navigate(`/player/${movie.id}`);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ))}
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Judy Hopps movies</h1>
            <div className="cards-row">
                {movies.slice(12, 15).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => {
                                navigate(`/player/${movie.id}`);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ))}
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Ryan Gosling movies</h1>
            <div className="cards-row">
                {movies.slice(16, 20).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => {
                                navigate(`/player/${movie.id}`);
                                window.scrollTo(0, 0);
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;

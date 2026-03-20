import { useNavigate } from "react-router-dom";

import movies from "./data"; 

function App() {
    const navigate = useNavigate();

    return (
        <>

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
            <div className="cards-row">
                {movies.slice(12, 16).map((movie) => (
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
            <div className="cards-row">
                {movies.slice(20, 24).map((movie) => (
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
            <div className="cards-row">
                {movies.slice(24, 28).map((movie) => (
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

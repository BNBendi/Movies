import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
    const navigate = useNavigate();

    const movies = [
        {
            id: 599,
            title: "Sunset Boulevard",
            img: "https://image.tmdb.org/t/p/original/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg"
        },
        {
            id: 567,
            title: "Rear Window",
            img: "https://image.tmdb.org/t/p/original/ILVF0eJxHMddjxeQhswFtpMtqx.jpg"
        },
        {
            id: 539,
            title: "Psycho",
            img: "https://image.tmdb.org/t/p/original/yZBfcfUKlXBx3Khciau7W1XLaJv.jpg"
        },
        {
            id: 170,
            title: "28 Days Later",
            img: "https://image.tmdb.org/t/p/original/sQckQRt17VaWbo39GIu0TMOiszq.jpg"
        },
        {
            id: 829,
            title: "Chinatown",
            img: "https://image.tmdb.org/t/p/original/kZRSP3FmOcq0xnBulqpUQngJUXY.jpg"
        },
        {
            id: 389,
            title: "12 Angry Men",
            img: "https://image.tmdb.org/t/p/original/2QXLVh32JKaWTjFJU3n8aIxRK9P.jpg"
        },
        {
            id: 24,
            title: "Kill Bill Vol-1",
            img: "https://image.tmdb.org/t/p/original/1aRbVU0JnuEvMYDNBFEpENiSDtg.jpg"
        },
        {
            id: 103,
            title: "Taxi Driver",
            img: "https://image.tmdb.org/t/p/original/rfvQPCQZaj9nKcmo7852BY3T4vs.jpg"
        },
    ];

    return (
        <>
            <h1 style={{ textAlign: "center", color: "white" }}>My movies</h1>

            <div className="cards-row">
                {movies.slice(0,4).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => navigate(`/player/${movie.id}`)}
                        />
                    </div>
                ))}
            </div>
            <div className="cards-row">
                {movies.slice(4,8).map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            onClick={() => navigate(`/player/${movie.id}`)}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;

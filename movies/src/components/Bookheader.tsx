import React from 'react'
import { useNavigate } from 'react-router'
import { useParams } from "react-router-dom";
import Bookfooter from './Bookfooter'

const Bookheader = () => {

    /*const navigate = useNavigate() */
    const movies = [
        {
            id: 599,
            title: "Sunset Boulevard",
            img: "https://image.tmdb.org/t/p/original/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg",
            lore: "Directed by Billy Wilder and released in 1950, Sunset Boulevard is a film noir about a struggling screenwriter and a faded silent film star. It won 3 Academy Awards and is widely regarded as one of the greatest films in cinema history.",
            header: "https://image.tmdb.org/t/p/original/iMBVNbIZ3SkaiN0KyxnAvAXMwWy.jpg",
            trailer: "https://youtu.be/_dY0SVxnHjQ"
        },
        {
            id: 567,
            title: "Rear Window",
            img: "https://image.tmdb.org/t/p/original/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
            lore: "Directed by Alfred Hitchcock in 1954, Rear Window stars James Stewart and Grace Kelly. The entire film was shot on a single elaborate set, and it is considered one of Hitchcock's finest thrillers.",
            header: "https://image.tmdb.org/t/p/original/5bN06p5OwRUEqcfrtNs5egV16yb.jpg",
            trailer: "https://youtu.be/m01YktiEZCw"

        },
        {
            id: 539,
            title: "Psycho",
            img: "https://image.tmdb.org/t/p/original/yZBfcfUKlXBx3Khciau7W1XLaJv.jpg",
            lore: "Released in 1960 and directed by Alfred Hitchcock, Psycho revolutionized the horror genre. Its shower scene became one of the most famous scenes in film history, and the film was nominated for four Academy Awards.",
            header: "https://image.tmdb.org/t/p/original/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
            trailer: "https://youtu.be/Wz719b9QUqY"
        },
        {
            id: 170,
            title: "28 Days Later",
            img: "https://image.tmdb.org/t/p/original/sQckQRt17VaWbo39GIu0TMOiszq.jpg",
            lore: "Directed by Danny Boyle and released in 2002, 28 Days Later revitalized the zombie genre. It was shot largely on digital video and helped popularize fast-moving infected in modern horror films.",
            header: "https://image.tmdb.org/t/p/original/2rKtFn8habYCvcvZv48CkBUNRLI.jpg",
            trailer: "https://youtu.be/mWEhfF27O0c"
        },
        {
            id: 829,
            title: "Chinatown",
            img: "https://image.tmdb.org/t/p/original/kZRSP3FmOcq0xnBulqpUQngJUXY.jpg",
            lore: "Released in 1974 and directed by Roman Polanski, Chinatown stars Jack Nicholson and Faye Dunaway. The film won the Academy Award for Best Original Screenplay and is considered a defining neo-noir film.",
            header: "https://image.tmdb.org/t/p/original/hR5z9snfaHY5D95vQFLNhvM4WSO.jpg",
            trailer: "https://youtu.be/T37QkBc4IGY"
        },
        {
            id: 389,
            title: "12 Angry Men",
            img: "https://image.tmdb.org/t/p/original/2QXLVh32JKaWTjFJU3n8aIxRK9P.jpg",
            lore: "Directed by Sidney Lumet in 1957, 12 Angry Men takes place almost entirely in a single jury room. It is widely praised for its writing and performances and has become a classic courtroom drama.",
            header: "https://image.tmdb.org/t/p/original/tj6iPnz18hGfr0LKqWmG6Cp3niO.jpg",
            trailer: "https://youtu.be/TEN-2uTi2c0"
        },
        {
            id: 24,
            title: "Kill Bill Vol-1",
            img: "https://image.tmdb.org/t/p/original/1aRbVU0JnuEvMYDNBFEpENiSDtg.jpg",
            lore: "Released in 2003 and directed by Quentin Tarantino, Kill Bill: Volume 1 stars Uma Thurman as The Bride. The film blends martial arts cinema, spaghetti westerns, and anime influences.",
            header: "https://image.tmdb.org/t/p/original/4BOwSKPwtPDCkTKqlJHAZDS6X9g.jpg",
            trailer: "https://youtu.be/7kSuas6mRpk"
        },
        {
            id: 103,
            title: "Taxi Driver",
            img: "https://image.tmdb.org/t/p/original/rfvQPCQZaj9nKcmo7852BY3T4vs.jpg",
            lore: "Directed by Martin Scorsese and released in 1976, Taxi Driver stars Robert De Niro as Travis Bickle. The film won the Palme d'Or at the Cannes Film Festival and is considered one of the greatest American films.",
            header: "https://image.tmdb.org/t/p/original/a58oc5qGNazb3QOxEH8eG5S7gjr.jpg",
            trailer: "https://youtu.be/T5IligQP7Fo"
        },
        {
            id: 920,
            title: "Cars",
            img: "https://image.tmdb.org/t/p/original/oloVyeBbkVGbFFaUjR8I7Boo7wA.jpg",
            lore: "Released in 2006 by Pixar Animation Studios and directed by John Lasseter, Cars follows Lightning McQueen in a world populated by anthropomorphic vehicles. It was nominated for two Academy Awards.",
            header: "https://image.tmdb.org/t/p/original/sd4xN5xi8tKRPrJOWwNiZEile7f.jpg",
            trailer: "https://youtu.be/W_H7_tDHFE8"
        },
        {
            id: 49013,
            title: "Cars 2",
            img: "https://image.tmdb.org/t/p/original/mevAQ3La39DhjqyY6aao1pTkMMR.jpg",
            lore: "Released in 2011 and directed by John Lasseter, Cars 2 shifts focus to Mater in an international spy adventure. It grossed over $560 million worldwide.",
            header: "https://image.tmdb.org/t/p/original/4BS8tgBNWg2jPiDlBwM2iJe1xB7.jpg",
            trailer: "https://youtu.be/lg5hj2c5Nkk"
        },
        {
            id: 260514,
            title: "Cars 3",
            img: "https://image.tmdb.org/t/p/original/jJ8TnHvWHaVadW5JJjGYsM07j9i.jpg",
            lore: "Released in 2017 and directed by Brian Fee, Cars 3 returns the focus to Lightning McQueen as he faces a new generation of racers. The film emphasizes mentorship and legacy.",
            header: "https://image.tmdb.org/t/p/original/4mlS1MitcOqdPLhxEFyk9Qwf5rr.jpg",
            trailer: "https://youtu.be/E4K7JgPJ8-s"
        },
        {
            id: 911430,
            title: "F1",
            img: "https://image.tmdb.org/t/p/original/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
            lore: "F1 is a Formula One racing film directed by Joseph Kosinski and starring Brad Pitt. The production has collaborated with Formula One and real F1 teams, filming during actual Grand Prix weekends.",
            header: "https://image.tmdb.org/t/p/original/8PHTO4a11JuZwYko7QPBUWq45wJ.jpg",
            trailer: "https://youtu.be/69ffwl-8pCU"
        },
        {
            id: 269149,
            title: "Zootopia",
            img: "https://image.tmdb.org/t/p/original/nZAnKuEhztoOFi8PSUMPUcFLn2u.jpg",
            lore: "Zootopia is a 2016 animated film produced by Walt Disney Animation Studios, following rookie officer Judy Hopps and con artist Nick Wilde as they uncover a conspiracy in a city of anthropomorphic animals. Zootopia 2 is the upcoming sequel that continues their partnership with a new mystery in the expanding animal metropolis.",
            header: "https://image.tmdb.org/t/p/original/9tOkjBEiiGcaClgJFtwocStZvIT.jpg",
            trailer: "https://youtu.be/jWM0ct-OLsM"
        },
        {
            id: 1084242,
            title: "Zootopia 2",
            img: "https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg",
            lore: "Zootopia is a 2016 animated film produced by Walt Disney Animation Studios about rookie officer Judy Hopps and fox Nick Wilde solving a conspiracy in a city of anthropomorphic animals. Zootopia 2 is the upcoming sequel that reunites the duo for a new mystery while expanding the world of the original film.",
            header: "https://image.tmdb.org/t/p/original/hi6h3ACrwAswclPEt4VTCeqGfTK.jpg",
            trailer: "https://youtu.be/BjkIOU5PhyQ"
        },
        {
            id: 1591771,
            title: "Zootopia 3",
            img: "https://image.tmdb.org/t/p/original/gramV8L8bzYnd3jHFmf8QKOMW86.jpg",
            lore: "Coming soon!",
            header: "https://image.tmdb.org/t/p/original/pwqdccilWJLcQBxX5PNTACP41iK.jpg",
            trailer: "https://youtu.be/BjkIOU5PhyQ"
        },

    ];
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
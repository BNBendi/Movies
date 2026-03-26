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
    {
        id: 238,
        title: "The Godfather",
        img: "https://image.tmdb.org/t/p/original/oaIPuKuJM8IdpgWSmNe9bBiyvRY.jpg",
        lore: "An offer you can't refuse. (also Luca Brasi sleeps with the fishes)",
        header: "https://image.tmdb.org/t/p/original/4vG2j7IgMvoILP71AmefPM8Ts6f.jpg",
        trailer: "https://youtu.be/BjkIOU5PhyQ"
    },
    {
        id: 2049,
        title: "Blade Runner 2049",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        lore: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        header: "https://image.tmdb.org/t/p/original/gNdLJU9TxrpGx4dkZidjys3fyy0.jpg",
        trailer: "https://youtu.be/haXvp8M9Cog"
    },
    {
        id: 2011,
        title: "Drive (2011)",
        img: "https://media.themoviedb.org/t/p/w300_and_h450_face/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
        lore: "When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
        header: "https://media.themoviedb.org/t/p/w500_and_h282_face/vMG0UBz12zaQC19snnq5vjvAJ8t.jpg",
        trailer: "https://www.themoviedb.org/video/play?key=9-iG4UJjTM8"
    },
    {
        id: 2017,
        title: "La La Land",
        img: "https://image.tmdb.org/t/p/original/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        lore: "La La Land (2016) follows aspiring actress Mia (Emma Stone) and jazz pianist Sebastian (Ryan Gosling) as they fall in love while pursuing their dreams in Los Angeles.",
        header: "https://image.tmdb.org/t/p/original/pnFOEnr0T1oqdvfvLMRF03gS95l.jpg",
        trailer: "https://youtu.be/0pdqf4P9MB8"
    },
    {
        id: 20000,
        title: "The Notebook",
        img: "https://image.tmdb.org/t/p/original/wbvboxr6xmdSbMEBKzXVWgAwJ1Q.jpg",
        lore: "The Notebook is a 2004 American romantic drama film directed by Nick Cassavetes, from a screenplay by Jeremy Leven and Jan Sardi, and based on the 1996 novel by Nicholas Sparks.",
        header: "https://image.tmdb.org/t/p/original/jKGIoP4f6Qgd9zdjduU3iS1fCIP.jpg",
        trailer: "https://youtu.be/-znC2xjg6XQ"
    },
    {
        id: 2007,
        title: "Chainsaw Man - The Movie: Reze Arc",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/pHyxb2RV5wLlboAwm9ZJ9qTVEDw.jpg",
        lore: "n a brutal war between devils, hunters, and secret enemies, a mysterious girl named Reze has stepped into Denji's world, and he faces his deadliest battle yet, fueled by love in a world where survival knows no rules.",
        header: "https://image.tmdb.org/t/p/original/zsKkFdy6Kr2hsQh95ceNzGPVZO8.jpg",
        trailer: "https://youtu.be/gydHt5LdCqc"
    },
    {
        id: 43242,
        title: "I Want to Eat Your Pancreas",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/qpV8kvRfAntV7D4aOOsLIz7OdPc.jpg",
        lore: "After his classmate and crush is diagnosed with a pancreatic disease, an average high schooler sets out to make the most of her final days.",
        header: "https://image.tmdb.org/t/p/original/BNzgGEl0DQiQTPyPcIfcuner1Q.jpg",
        trailer: "https://www.youtube.com/watch?v=MmoBvmJA9XI"
    },
    {
        id: 43247,
        title: "The Tunnel to Summer, the Exit of Goodbyes",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/5AGA6pbBKXZTI8k1c6odx30JuQR.jpg",
        lore: "Urashima Tunnel – Once you enter that tunnel, you can get whatever you want, but at a price...",
        header: "https://image.tmdb.org/t/p/original/rWJc5BkI7Op1IYMb3gW6qGjOnIp.jpg",
        trailer: "https://www.youtube.com/watch?v=EhPu7arYYYo"
    },
    {
        id: 4322,
        title: "Good Will Hunting ",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
        lore: "Will Hunting is a headstrong, working-class genius who is failing the lessons of life. After one too many run-ins with the law, Will's last chance is a psychology professor, who might be the only man who can reach him.",
        header: "https://image.tmdb.org/t/p/original/uzM4Rdr7aMQNdT8MqKY5Mic733N.jpg",
        trailer: "https://www.youtube.com/watch?v=PaZVjZEFkRs"
    },
    {
        id: 5322,
        title: "Dead Poets Society",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/l5NbiHKUmahlAT3Q1ig8Tyl9xrc.jpg",
        lore: "Oh Captain my Captain",
        header: "https://image.tmdb.org/t/p/original/lFIXZpwwlF9hg8NM3RazaIJDuaj.jpg",
        trailer: "https://www.youtube.com/watch?v=ye4KFyWu2do"
    },
    {
        id: 5323,
        title: "The Last Samurai ",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/a8jmJPs5eZBARmnuEEvZwbjwyz4.jpg",
        lore: "Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them...",
        header: "https://media.themoviedb.org/t/p/w500_and_h282_face/g7vyM5fJSGXUyeP6EZEtfBwC5Xa.jpg",
        trailer: "https://www.youtube.com/watch?v=T50_qHEOahQ"
    },
    {
        id: 5325,
        title: "Interstellar ",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
        lore: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        header: "https://media.themoviedb.org/t/p/w500_and_h282_face/vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
        id: 5328,
        title: "The Good, the Bad and the Ugly",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_face/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        lore: "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold",
        header: "https://media.themoviedb.org/t/p/w500_and_h282_face/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        trailer: "https://www.youtube.com/watch?v=IFNUGzCOQoI"
    },





];

export default movies;
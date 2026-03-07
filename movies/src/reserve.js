const reserveTicket = async () => {
    const reservation = {
      FilmCim: "Dune",
      TeremSzam: 1,
      Idopont: "2026-06-10 18:00",
      JegyAr: 12.5,
      FoglaloNeve: "John"
    };
  
    await fetch("http://localhost:5000/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reservation)
    });
  };
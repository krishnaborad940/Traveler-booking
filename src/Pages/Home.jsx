import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";  // ✅ Import AuthContext

export default function Home() {
    const { user: loggedInUser, logout } = useContext(AuthContext);  // ✅ Context से User और Logout Function लें
    const [data, setData] = useState({
        hotels: [],
        cars: [],
        flights: []
    });

    let fetchData = () => {
        fetch("http://localhost:8001/showall", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setData({
                hotels: result.data.hotels,
                cars: result.data.cars,
                flights: result.data.flights
            });
        })
        .catch(err => console.log("Fetch Error:", err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section>
                <img src="/Images/b1.webp" alt="" width="100%" height="600px" />
            </section>

            {/* 🔹 Logout Button (अगर User Login है तो ही दिखाएँगे) */}
            <div className="container">
                {loggedInUser ? (
                    <button onClick={logout} style={{ float: "right", margin: "10px" }}>Logout</button>
                ) : null}
            </div>

            {/* Hotels */}
            <section className="container">
                <h1>Hotels</h1>
                <div className="grid-container">
                    {data.hotels.map((hotel, i) => {
                        const imageUrl = hotel.Image.startsWith("http")
                            ? hotel.Image
                            : `http://localhost:8001${hotel.Image}`;

                        return (
                            <div className="box" key={i}>
                                <img src={imageUrl} alt="" width="200px" />
                                <h4>{hotel.Name}</h4>
                                <h5>{hotel.RoomType}</h5>
                                <p>{hotel.MobileNo}</p>
                                <p>{hotel.Price}</p>
                                <p>{hotel.Rating}⭐</p>
                                <p>{hotel.status}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Cars */}
                <h1>Cars</h1>
                <div className="grid-container">
                    {data.cars.map((car, i) => {
                        const imageUrl = car.Image.startsWith("http")
                            ? car.Image
                            : `http://localhost:8001${car.Image}`;

                        return (
                            <div className="box" key={i}>
                                <img src={imageUrl} alt="" width="200px" />
                                <h4>{car.Name}</h4>
                            </div>
                        );
                    })}
                </div>

                {/* Flights */}
                <h1>Flights</h1>
                <div className="grid-container">
                    {data.flights.map((flight, i) => {
                        const imageUrl = flight.Image.startsWith("http")
                            ? flight.Image
                            : `http://localhost:8001${flight.Image}`;

                        return (
                            <div className="box" key={i}>
                                <img src={imageUrl} alt="" width="200px" />
                                <h4>{flight.Name}</h4>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

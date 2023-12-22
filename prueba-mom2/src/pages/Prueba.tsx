import React, { useState, useEffect } from "react";
import from './Horoscopo.json'; 
import './Cards.css'

interface Horoscope {
    signo: string;
    prediccion: string;
}

function Card() {
    const [horoscopeData, setHoroscopeData] = useState<Horoscope[]>([]);

    useEffect(() => {
    // Simular la carga de datos desde el archivo JSON
    setHoroscopeData(horoscopeData);
    }, []);

    return (
    <div>
        {horoscopeData.length > 0 ? (
        horoscopeData.map((horoscope, index) => (
            <div className="card" key={index}>
                <h1>Horóscopo</h1>
            <div className="card-content">
                <h2>{horoscope.signo}</h2>
                <p>{horoscope.prediccion}</p>
            </div>
        </div>
        ))
        ) : (
        <p>Cargando...</p>
    )}
    </div>
    );
}
export default Card;


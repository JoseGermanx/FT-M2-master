import React from "react";
import estilos from "./Card.module.css";

export default function Card({
  min,
  max,
  img,
  id,
  wind,
  temp,
  name,
  weather,
  clouds,
  latitud,
  longitud,
  pais,
onClose}
) {
  // acá va tu código

  return (
    <div className={estilos.contenedor}>
      <button onClick={onClose} className={estilos.btn}>
        X
      </button>
      <div className={estilos.tituloCard}>
      <div>
        <h4>{name}</h4>
      </div>
      <span className={estilos.bandera}>
          <img  src={`https://flagcdn.com/16x12/${pais}.png`} alt="Pais"/>
      </span>
      </div>
      <div className={estilos.temp}>
          <h6>Temperatura</h6>
          <p>{temp}°</p>
      </div>
      <div className={estilos.infoCont}>
        <div>
          <h6>Min</h6>
          <p>{min}°</p>
        </div>
        <div>
          <h6>Max</h6>
          <p>{max}°</p>
        </div>
          <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img not found"
        />
      </div>
    </div>
  );
}

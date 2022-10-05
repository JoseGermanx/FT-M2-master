import React, {useState} from 'react';
import estilos from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

    const [city, setCity] = useState("");

    function manejoCambio (e) {
      setCity(city => city = e.target.value);
    }

  // acá va tu código
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={manejoCambio}
      />
      <input type="submit" value="Agregar" />
    </form>
  );

  
};
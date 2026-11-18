import { useState, useEffect } from "react";
import "./Main.css";
import CardCharacter from "../CardCharacter/CardCharacter";

export default function Main() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error al obtener personajes:", error));
  }, []);

  return (
    <main className="main-container">
      {characters.map((character) => (
        <CardCharacter key={character.id} character={character} />
      ))}
    </main>
  );
}
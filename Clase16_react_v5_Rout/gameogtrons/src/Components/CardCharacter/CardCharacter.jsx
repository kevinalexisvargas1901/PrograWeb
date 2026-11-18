import "./CardCharacter.css";

export default function CardCharacter({ character }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={character.imageUrl} alt={character.fullName} />
      </div>
      <div className="card-info">
        <p><strong>Nombre:</strong> {character.fullName}</p>
        <p><strong>Título:</strong> {character.title || "N/A"}</p>
        <p><strong>Familia:</strong> {character.family || "Desconocida"}</p>
      </div>
    </div>
  );
}
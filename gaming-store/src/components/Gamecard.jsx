import { Link } from 'react-router-dom';

function Gamecard({ game }) {
return (
    <div className="game-card">
    <Link to={`/games/${game.id}`}>
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
    </Link>
     <p className="genre">{game.genre}</p>
     <p className="rating">⭐{game.rating} stars</p>
     <p className="price">
        {game.isFree ? "play for free" : `$${game.price.toFixed(2)}`}
     </p>
    </div>
  );
}
export default Gamecard;
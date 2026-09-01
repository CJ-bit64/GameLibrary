import { useParams, useNavigate } from "react-router-dom";
import allGames from "../data/games";
import {useLibrary} from "../context/LibraryContext";

function GameDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToLibrary, isInLibrary } = useLibrary();

    const game = allGames.find((g) => g.id === Number(id));

    if (!game) {
        return <p>Game not found.</p>;
    }

    function handleAdd() {
        addToLibrary(game);
        navigate("/library");
    }

    return (
        <div className="game-details">
            <img src={game.image} alt={game.title} className="game-image" />
            <h1>{game.title}</h1>
            <p className="genre">{game.genre}</p>
            <p className="rating">⭐ {game.rating}</p>
            <p className="description">{game.description}</p>
            <p className="price">
                {game.isFree ? "Free" : `$${game.price.toFixed(2)}`}
            </p>

            <button onClick={handleAdd}>
                {isInLibrary(game) ? "In Library" : "Add to Library"}
            </button>
        </div>
    );
}
export default GameDetails;

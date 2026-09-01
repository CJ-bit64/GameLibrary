import {useState, useEffect} from "react";
import Gamecard from "../components/Gamecard";
import allGames from "../data/games";

const GENRES = ["All", "Action", "Sports", "Racing", "FPS", "RPG"];

function Games() {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genreFilter, setGenreFilter] = useState("All");

     useEffect(() => {
    const timer = setTimeout(() => {
      setGames(allGames);
    }, 300);

    return () => clearTimeout(timer);
    }, []);

  const filteredGames = games
.filter((g) => g.title?.toLowerCase().includes(searchTerm.toLowerCase()))
.filter((g) => genreFilter === "All" || g.genre === genreFilter);

return (
<div className="games-page">
    <h1>Store</h1>
   {/* for searcing games */}
    <input type="text" 
    placeholder="Search games..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-bar"
    />
    <div className="filter-bar">
        {GENRES.map((genre) => (
            <button
                key={genre}
                className={genre === genreFilter ? "active" : ""}
                onClick={() => setGenreFilter(genre)}
            >
                {genre}
            </button>
        ))}
    </div>

    <div className="games-grid">
        {filteredGames.length > 0 ? (
            filteredGames.map((game) => <Gamecard key={game.id} game={game} />)
        ) : (
            <p>No games found.</p>
        )}
    </div>
</div>
);
}


export default Games;
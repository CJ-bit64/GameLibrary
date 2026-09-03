import {useLibrary} from "../context/LibraryContext";

function Library() {
   const { library, removeFromLibrary } = useLibrary();


   return (
    <div className="library-page">
     <h1>My Library</h1>
      {library.length === 0 ? (
     <p>your library is empty. go add fifa cus ronaldo is the goat</p>
      ) : (
        <div className="games-grid">
          {library.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.image} alt={game.title} />
              <h2>{game.title}</h2>
              <p>{game.genre}</p>
              <button onClick={() => removeFromLibrary(game.id)}>
                Remove this game
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Library;
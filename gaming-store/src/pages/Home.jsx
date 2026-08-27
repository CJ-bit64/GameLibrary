import { Link } from "react-router-dom";

function Home() {
    return (
     <div className="home-page">
        <h1> Welcome to GRP2's GAMESTORE </h1>
        <p>Discover the latest and greatest games in our store. Find and play your Favourite games</p>

         <Link to="/games" className="explore-button">
            Explore Games
        </Link>
     </div>
    );
}
export default Home;
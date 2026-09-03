import { Link } from "react-router-dom";
import '../App.css';
import HeroSubSec from "../components/herosubsec";

function Home() {
    return (
     <div className="home-page">
       
       
        <p className="hero">
            <p className="herocontent">
            <h1> Welcome to GRP2's GAMESTORE </h1>
        <p>Discover the latest and greatest games in our store. Find and play your Favourite games</p>
        <Link to="/games" className="explore-button">
            Explore Games
        </Link> 
        </p>

        </p>
    <p className="featuredtxt">
     Featured and Recommended
     </p>
       <p className="backdropsubsec">
        <HeroSubSec />
            </p>
        

         
        
     </div>
    );
}
export default Home;
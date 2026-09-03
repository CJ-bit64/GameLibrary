import React from "react";
import '../App.css';
import vid1 from "/Videos/Homepage-gameAD.mp4"
import img1 from "/images/HomepageIMG.jpg"
import img2 from "/images/cod.jpg"
import img3 from "/images/cod1.jpg"
import img4 from "/images/cod2.jpg"
import img5 from "/images/cod3.jpg"


function HeroSubSec(){
    return(
        <div>
           
            
            <p className="herosubsec">
                <p className="herosubsecleft">
                    <video controls >
                        <source src={vid1}/>
                    </video>
                    
                </p>
                <p className="herosubsecright">
                    <p className="mediumtxt"> Call Of Duty</p>

                <p className="reviewtxt">Mostly Positive (14805 eviews)</p>
                    <p className="herosubsecrightimgs">
                        <img src={img2} className="game-images"/>
                        <img src={img3} className="game-images"/>
                        <img src={img4} className="game-images"/>
                        <img src={img5} className="game-images"/>
                    </p>


                    {/* <img src={img1} /> */}

                    
                        <p className="topseller">Top Seller</p>
                        <p className="badge"> Free to play</p>
                        
                    
                </p>
                
            </p>
        </div>
    )
}

export default HeroSubSec
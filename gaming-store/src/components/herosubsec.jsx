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
                    <video controls height={400}>
                        <source src={vid1}/>
                    </video>
                    
                </p>
                <p className="herosubsecright">
                    <p className="mediumtxt"> Call Of Duty</p>

                <p className="reviewtxt">Mostly Positive (14805 eviews)</p>
                    <p className="herosubsecrightimgs">
                        <img src={img2} height={100}/>
                        <img src={img3} height={100}/>
                        <img src={img4} height={100}/>
                        <img src={img5} height={100}/>
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
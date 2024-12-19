import React from "react";
import "./Locations.css";

const Locations =()=>{
    return(
        <>
        <div className="locations">
            <h2>London</h2>
            <h1>Locations</h1>
        </div>
        <div className="Chelsea">
            <div className="Chelsea_card">
                <h2>Kensington</h2>
                <ul>
                    <li><a href="">198 Kensington High St, Saharanpur W8 7RG, UP</a></li>
                    <li><a href="">dev@gmail.com</a></li>
                    <li><a href="">+91 7535045914</a></li>
                </ul>
                <div className="btnn">
                    <button><a href="">Studio</a></button>
                    <button><a href="">Schedule</a></button>
                    <button><a href="">Buy</a></button>
                </div><br />
            </div>
            <div className="Chelsea_card">
            <h2>Chelsea</h2>
                <ul>
                    <li><a href="">370 King’s Rd, Saharanpur SW3 5ET</a></li>
                    <li><a href="">dev@gmail.com</a></li>
                    <li><a href="">+91 7535045914</a></li>
                </ul>
                <div className="btnn">
                    <button><a href="">Studio</a></button>
                    <button><a href="">Schedule</a></button>
                    <button><a href="">Buy</a></button>
                </div><br />
            </div>
        </div><br /><br /><br /><br />
        </>
    )
}
export default Locations
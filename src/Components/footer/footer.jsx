import React from "react";
import "./footer.css";


const Footer =()=>{
    return(
      <>
      <div className="fotter_main">
        <div className="fotter_cards">
            <div className="footer_card">
                <img src="https://karve.club/wp-content/uploads/2024/03/footer_logo.webp" alt="" />
                <h5>Inspired by the Big Apple, on the pulse of the Big Smoke, we <br /> redefine the modern-day workout <br /> with our signature Transformer <br /> Pilates classes. We capture New York’s <br /> infectious energy, tailored to <br />London lifestyles.</h5>
            </div>
            <div className="footer_card1">
              <li><a href="">Gift Card</a></li>
              <li><a href="">Buy</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Contact Us</a></li>
            </div>
            <div className="footer_card2">
            <li><a href="">FAQ's</a></li>
              <li><a href="">Franchise</a></li>
              <li><a href="">Events</a></li>
              <li><a href="">Terms And Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
            </div>
        </div>
        <div className="last">
            <h5>©Copyright By KARVE 2024</h5>
            <h4>TRANSFORM YOUR MIND | TRANSFORM YOUR BODY</h4>
        </div><br />
      </div>
      </>  
    )
}
export default Footer
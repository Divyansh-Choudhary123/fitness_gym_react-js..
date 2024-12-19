import React from "react";
import "./Studio.css";
import video from "./aa.mp4";
import video1 from "./ab.mp4"

const Studio =()=>{
    return(
        <>
        <div className="studio">
         <img src="https://karve.club/wp-content/uploads/2024/03/studio_bg.webp" alt="" />   
         <h1>STUDIO</h1>
        </div>
     
     <div className="stdio_vid">
        <h1>TEANSFORMER PILATES™ STUDIO</h1>
          <video autoPlay muted loop >
                <source src={video} type="video/mp4" />
            </video>
            <h5>In our urban loft-inspired studio, the lights dim and the music amps up, creating an electrifying atmosphere around our custom KARVE transformer machines. These machines are fully adjustable, offering a tailored experience to match your unique needs. Our signature method combines Pilates-based sequences with dynamic resistance to transform your body and mind. Guided by passionate, high-energy instructors, our 50-minute classes are crafted to push you beyond your limits for maximum results. With just 12 machines, each session is designed to help you exceed your goals.</h5>
            <button><a href="">SCHEDULE</a></button>
     </div>
     <div className="stdio_black">
     <video autoPlay muted loop >
                <source src={video1} type="video/mp4" />
            </video>
            <div className="stdio_black_text">
                <h1>CLUB</h1>
                <h5>A wellbeing haven created to support our clients busy lifestyles. Replicating the eclectic streets of Manhattan’s Soho with a serene spa vibe, the club offers a café and some work spaces. Whether its a business meeting over a post-workout shake or just a catch up with a friend, our space will quickly become an extension of your healthy lifestyle.</h5>
                <button><a href="">BUY CLASS</a></button>
            </div><br /><br /><br />
     </div>
     <div className="Lounge">
        <div className="Lounge_txt">
         <h1>Cafe & Lounge Area:</h1>
         <h5>At our studio, we’ve thought of everything to enhance your experience. Indulge in a wide selection of freshly brewed coffee, refreshing smoothies, and premium teas to keep you energized before or after your workout. Need to recharge? Take advantage of our dedicated phone and laptop charging areas. Stay hydrated with unlimited access to our water fountain, ensuring you’re always fueled and refreshed. And if you arrive without your gear, no worries! Our in-studio merch has you covered with stylish sportswear available for purchase.</h5>
         <div className="btnn">
         <button><a href="">SECHUDLE</a></button>
         <button><a href="">MORE INFO</a></button>
         </div>
        </div>
        <img src="https://karve.club/wp-content/uploads/2024/03/Rectangle-78.webp" alt="" />
     </div>
     <div className="room">
     <video autoPlay muted loop >
                <source src={video1} type="video/mp4" />
            </video>
            <div className="room_text">
                <h1>Private Studio Room:</h1>
                <h5>Alongside our Main Studio, we have a smaller second studio for private or small group sessions. Learn more about those here.</h5>
                <button><a href="">PRIVATE SESSION</a></button>
            </div>
     </div><br /><br /><br />
        </>
    )
}
export default Studio
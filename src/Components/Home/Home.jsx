import React from "react";
import "./Home.css"
import videoFile from "./video.mp4";
import videoFile1 from "./aa1.mp4";
import videoFile2 from "./aa2.mp4";

const Home = ()=>{
    return(
        <>
         <video autoPlay muted loop >
                <source src={videoFile} type="video/mp4" />
            </video>
      <div className="firstimg">
      <img src="https://karve.club/wp-content/uploads/2024/05/KARVE_main_logo_image.webp" alt="" />
      <button><a href="">BOOK CLASSES</a></button>
      </div>
      <div className="second_crads">
        <img src="https://karve.club/wp-content/uploads/2024/03/transform.webp" alt="" />
        <div className="second_card">
           <h1>KARVE TRANSFORMER PILATES</h1>
           <h5>Inspired by the Big Apple, on the pulse of the Big Smoke – we redefine the modern-day Pilates inspired workout at our Transformer Pilates studio. We capture that New York resilience and drive, tailored to the London lifestyle.</h5>
           <h5>Our 50-minute class is performed on our custom-made, resistance-based Transformer machines. Each class starts with a warm-up, followed by a full body high-intensity workout, and finishes with a stretch and a mindfulness session allowing for a full reset.</h5>
           <h5>The mind is at the forefront of our classes. We believe that a strong mind is the key to a strong body. Transform your mind into a ‘yes I can’ attitude and the results will speak for themselves. Our instructors are always there to motivate and lead the way, but it’s up to you to push through.</h5>
           <button><a href="">CLASS PACKS</a></button>
        </div>
      </div>
      <div className="blackcards">
        <div className="blackcard">
      <video autoPlay muted loop >
                <source src={videoFile1} type="video/mp4" />
            </video>
            <div className="blackcard1">
                <h1>TRANSFORMER PLITAES STUDIO</h1>
                <h5>With the lights turned low, and the music cranked high, exhilarating beats pulsate from our urban loft style studio centered around our custom made KARVE Transformer machines. Powered by our high energy and passionate instructors, our studio experience will transform your body and mind with intentional and expertly executed Pilates-based sequences, leading to maximum results. Our machines are configured to offer a range of resistance levels to challenge you as you make your way through our 50-minute class.</h5>
                <button><a href="">SCHEDULE</a></button>
                </div>
            </div>

            <div className="blackcard">
            <div className="blackcard1">
                <h1>CLUB</h1>
           <h5>Our wellbeing haven was created to support our clients’ busy lifestyles. Replicating the eclectic streets of Manhattan’s Soho with a serene spa vibe, our club offers a café with coffee, custom smoothies, and work spaces. Whether it’s a business meeting over a post-workout shake or just catching up with a friend, our space will quickly become an extension of your healthy lifestyle.</h5>            
          <button><a href="">BUY CLASS</a></button><br /><br />
                </div>
                <video autoPlay muted loop >
                <source src={videoFile2} type="video/mp4" />
            </video>
            </div><br /><br /><br /><br />
      </div>
      <div className="white_text">
        <h4>Nadine is just amazing. The most challenging class around and the most challenging trainer but always with a smile and good humour.</h4>
        <h3>KARVE with Nadine</h3><br /><br />
      </div>
      <div className="seen_black">
        <h1>As seen In</h1>
        <div className="seen_img">
            <img src="https://karve.club/wp-content/uploads/2024/03/company-logo_1.webp" alt="" />
            <img src="https://karve.club/wp-content/uploads/2024/03/times-logo.webp" alt="" />
            <img src="https://karve.club/wp-content/uploads/2024/03/es-400.webp" alt="" />
            <img src="https://karve.club/wp-content/uploads/2024/03/es-400.png   " alt="" />
        </div><br /><br /><br />
      </div>
      <div className="exclusive">
        <div className="exclusive_card">
            <img src="https://karve.club/wp-content/uploads/2024/03/out_team_6.webp" alt="" />
        </div>
        <div className="exclusive_card">
        <h1>#LETSGETKARVED</h1>
        <h5>Be a part of some exclusive sneak peeks by heading over to our Instagram page @karve.club</h5>
        <button><a href="">FOLLOW US</a></button><br /><br />
        </div>
        <div className="exclusive_card">
          <img src="https://karve.club/wp-content/uploads/2024/03/getkarved_2.webp" alt="" />
        </div> 
      </div>
      <div className="dawnload">
      <img src="https://karve.club/wp-content/uploads/2024/04/pilates-inspired.webp" alt="" />
      </div><br /><br />
     
       </>
    )
}
export default Home
import React from "react";
import "./About.css"


const About =()=>{
    return(
      <>
    <div className="about_main">
      <img src="https://karve.club/wp-content/uploads/2024/03/about_bg.webp" alt="" />
      <h2>ABOUT KARVE</h2>
    </div>
    <div className="second_crads">
        <img src="https://karve.club/wp-content/uploads/2024/04/franchise-network.webp" alt="" />
        <div className="second_card">
           <h1>WHAT’S KARVE?</h1>
           <h5>Welcome to KARVE where we've reimagined the modern workout with our Transformer Pilates classes. Infused with the vibrant spirit of NYC, our sessions are designed for the fast-paced London lifestyle.</h5>
           <h5>‍Each 50-minute class takes place on our custom-built, resistance-based Transformer machines. We start with a warm-up, followed by a high-intensity full-body workout, and finish with a stretch and mindfulness session to reset both body and mind.</h5>
           <h5>‍At the heart of our classes is the belief that a strong mind fuels a strong body. Cultivate a "yes I can" mindset, and the results will follow. Our instructors will guide and motivate you, but the power to push through lies in your hands.</h5><br />
           <li><a href="">Check out our Class Packs & Memberships</a></li>
           <button><a href="">BUY CLASS</a></button>
        </div>
      </div>
      <div className="third_cards">
        <div className="third_card">
          <h1>ENERGIZED BY ENDORPHINS, SHAPED BY INNOVATION.</h1>
          <h5>Our endurance-focused KARVE workout is designed to target slow-twitch muscle fibers, boosting both strength and metabolism.</h5>
          <h5>While intense, the workout is easy on the joints, incorporating a series of resistance-based, mindful movements that are intensified to deliver transformational results. We call it Transformer Pilates.</h5>
          <h5>At the heart of our philosophy is the belief that a strong mind-body connection is key to achieving lasting results and surpassing personal goals. Each session concludes with five minutes of endorphin-boosting mindfulness and breathwork, helping to center the mind and prepare our clients to navigate the demands of modern life.</h5>
          <button><a href="">BUY CLASS</a></button>
        </div>
        <img src="https://karve.club/wp-content/uploads/2024/07/about-sec2.webp" alt="" />
      </div>
       <div className="meet">
        <img src="https://karve.club/wp-content/uploads/2024/03/about_our_team.webp" alt="" /><br /><br />
        <div className="meet_cards">
        <h1>MEET OUR STRONGEST TEAM</h1>
        <button><a href="">OUR TEAM</a></button>
        </div>
        </div><br /><br />
      </>  
    )
}
export default About
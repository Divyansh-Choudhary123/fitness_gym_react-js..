import React from "react";
import './Navbar.css'
// import { Link } from "react-router";

const Navbar = ()=>{
    return(
        <>
     
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <a class="navbar-brand" href="#"><img src="https://karve.club/wp-content/uploads/2024/05/Logo.svg" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
               UK
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="">KSA</a>
                <a class="dropdown-item" href="">UAE</a>
                <a class="dropdown-item" href="">GR</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About">ABOUT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Locations">LOCATIONS</a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="Studio">STUDIO</a>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                SCHEDULE
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="Kinsing">Kensington</a>
                <a class="dropdown-item" href="Chelsa">Chelsea</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
               BUY
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="Kensington">Kensington</a>
                <a class="dropdown-item" href="Chelsea">Chelsea</a>
              </div>
            </li>
              <li class="nav-item">
                <a class="nav-link" href="Team">TEAM</a>
              </li>
          </ul>
          <button id="btn11">GET STARTED</button>
        </div>
      </nav>
        </>
    )
}

export default Navbar
import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video class="video" playsinline loop autoPlay muted autobuffer>
        <source src="/videos/Yosuke_v2_compressed.mp4" type="video/mp4" />
      </video>

      <h1>Sakana Sushi Bar & Japanese Cuisine</h1>
      <p>DINE-IN & PICK UP AVAILABLE</p>
      <a class="button" href="https://www.customer2you.com/SakanaSushiBar.nsf/" target="_blank">
        <span>Order Online</span>
      </a>

    </div>
  );
}

export default HeroSection;

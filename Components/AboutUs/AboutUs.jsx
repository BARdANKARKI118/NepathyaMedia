import React from "react";
import "./AboutUs.css";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="background">
      <h1 className="text">
        Nepathya <span id="color">Media Team</span>
      </h1>

      <div className="line"></div>
      <div className="aboutus-description-container" > 

      
      <div className="image">
        <img src="../public/images/selecticons.png" alt="" />
      </div>
      <div className="card-right-container"> 
      <Card className ="card1"
        heading="Digital Arts"
        msg=" We design creative digital artworks that visually communicate ideas with modern artistic expression."
        />

      <Card className ="card2"
        heading="Creative Visuals"
        msg="We create impactful visuals that capture attention and strengthen storytelling across digital platforms."
        />

      <Card className ="card3"
        heading="Podcast"
        msg="We produce engaging podcasts that share stories, ideas, and conversations from our college community."
        />

      <Card className ="card4"
        heading="Event Handling"
        msg="We handle complete media coverage of events with creative documentation and smooth coordination."
        />
        </div>  
    </div>
    </div>
  );
};

export default AboutUs;

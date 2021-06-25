import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/festival.mp4" autoPlay loop muted />
      <h1>CULTUROFESTO</h1>
      <p>COME CELEBRATE WITH US</p>
      <div className="hero-btns">
        {/*<Button
          //className="btns"
         // buttonStyle="btn--outline"
         // buttonSize="btn--large"
        //>
         // GET STARTED
        //</Button>*/}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=vOd_cTovo-8", "_blank")
          }
          type="button"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

//onClick={console.log("hey")}

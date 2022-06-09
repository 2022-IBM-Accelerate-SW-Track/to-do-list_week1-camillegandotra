import React, { Component } from 'react';
import "./About.css";
import CamilleGandotra from "../assets/CamilleGandotra.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
      <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {CamilleGandotra}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Camille Gandotra</div>
        <div className="brief_description">
          Hey my name is Camille and I am a rising sophmore studying Computer Engineering at UC Santa Cruz.
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}
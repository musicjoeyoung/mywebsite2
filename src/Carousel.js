import React from "react";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./img/DronePiano.png";
import img2 from "./img/VirtualPracticeRoom.png";
import img3 from "./img/TrumpetSite.png";
import img4 from "./img/Aether.png";
import img5 from "./img/Stick-N-Pin.png";
import Rotate from "react-reveal/Rotate";

export default function Carousel() {
  return (
    <Rotate>
      <div>
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
          <div className="container">
            <a href="https://drone-piano.herokuapp.com/">
              <img src={img1} className="sliderimg" alt="" />
            </a>
            <div className="carouselOverlay">
              <div className="imgCarouselText">
                The purpose of this piano is to act as another audio/visual tool
                for composers. Sometimes seeing the set up of an instrument
                differently can inform new musical decisions. The single-pitched
                drones in the middle of the piano serve as the musical base for
                which the user can play on top of (or against).{" "}
              </div>
            </div>
          </div>
          <div className="container">
            <a href="https://aaether.herokuapp.com/">
              <img src={img4} className="sliderimg" alt="" />
            </a>
            <div className="carouselOverlay">
              <div className="imgCarouselText">
                An audio-visual music collaboration experience, my team's goal
                was to create a loosely structured audio visual “jam” space for
                users to compose and visualize music with a variety of
                instruments collaboratively in a live session. When
                collaborative art cannot be made in-person, this application
                brings people together in a creative environment. This audio
                visual “jam” space serves as a tool to compose and visualize
                music with a variety of instruments in a live 3-D session.
              </div>
            </div>
          </div>
          <div className="container">
            <a href="https://github.com/musicjoeyoung/Stackathon/tree/master">
              <img src={img2} className="sliderimg" alt="" />
            </a>
            <div className="carouselOverlay">
              <div className="imgCarouselText">
                This growing application allows users to read sheet music while
                using a metronome. This virtual practice room allows the user to
                view as much digital music as they want instead of sorting and
                switching through various books and loose sheets of paper.
              </div>
            </div>
          </div>
          <div className="container">
            <a href="https://github.com/musicjoeyoung/AWP">
              <img src={img3} className="sliderimg" alt="" />
            </a>
            <div className="carouselOverlay">
              <div className="imgCarouselText">
                This application helps the user learn how to play the trumpet.
                Including musical transposition and trumpet fingerings, this
                site serves as an interactive education tool.
              </div>
            </div>
          </div>

          <div className="container">
            <a href="https://sticknpin.herokuapp.com/">
              <img src={img5} className="sliderimg" alt="" />
            </a>
            <div className="carouselOverlay">
              <div className="imgCarouselText">
                This is an e-commerce web application to sell stickers and pins.
                This mastery in React, Redux, Express, and Sequelize. Additional
                libraries/techs include Express Eession, persisting guest
                information passport, Google Oauth Material-UI,
                Mocha/Chai/Enzyme/Supertest, testing, Webpack/Babel, and
                bundling.
              </div>
            </div>
          </div>
        </AliceCarousel>
      </div>
    </Rotate>
  );
}

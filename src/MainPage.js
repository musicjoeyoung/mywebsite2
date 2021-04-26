import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Skills from "./Skills";
import Bounce from "react-reveal/Bounce";
import Jello from "react-reveal/Jello";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
/* import TechResources from "./TechResources"; */
import Piano2 from "./Piano2";
//import { BrowserRoute`r as Route } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="parallax">
        <Navbar />
        <Header />
        <Contact />
        <Bounce bottom>
          <div id="spanDivAbout">
            {/*   <span className="border" id="span2">
              ABOUT
            </span> */}
          </div>
        </Bounce>
        <About />
        <Skills />
        <Bounce bottom>
          <div className="bgimg-2">
            <div className="spanDivProjects" id="spanDivProjects">
              <span className="border" id="span1">
                SELECT PROJECTS
              </span>
            </div>
          </div>
          <Piano2 />

          <div id="div2">
            <Carousel />
          </div>

          {/*           <div className="bgimg-2">
            <div className="spanDivProjects" id="spanDivProjects">
              <span className="border" id="span1">
                TECH RESOURCES
              </span>
            </div>
          </div>
          <TechResources /> */}

          <div className="bgimg-3">
            <div className="caption" id="spanContactForm">
              <span className="border" id="span3">
                QUESTIONS? 
                COMMENTS? 
                OR JUST SAY HELLO!
                
              </span>
            </div>
          </div>
        </Bounce>
        <Jello>
          <div id="div3">
            <ContactForm />
          </div>
        </Jello>
        <div id="div4"></div>

        <Footer />
      </div>
    );
  }
}

export default MainPage;

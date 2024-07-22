//gpt

import React, { useEffect } from 'react';
import Typed from 'typed.js';

//gpt


export default function HeroSection() {
  //gpt

  useEffect(() => {
    const options = window.innerWidth > 1200 ? {
      strings: ["Let's make engineering beautiful together"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,

    } : {
      strings: ["Let's make engineering beautiful together"],
    };

    const typed = new Typed(".typed-text", options);

    // Cleanup typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  // gpt
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Divyanshu Jain</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">B. Tech</span>{" "}
              <br />
              Student
            </h1>
            <div>
            <p className="hero--section-description">
              {/* Let's make engineering beautiful together */
              /*gpt */

              <span className="typed-text"></span>

              /*gpt */
              }
              
            </p>
            </div>
          </div>
          {/* <button className="btn btn-primary">My Resume</button> */
            <a href="/Divyanshu_Jain_Resume.pdf" download className="btn btn-primary">
            My Resume
            </a>
          }
        </div>
        <div className="hero--section--img">
          { //<img src="./img/hero_img.png" alt="Hero Section" /> 
             <img src="./img/My_hero_3.png" alt="Hero Section" />
          }
        </div>
      </section>
    );
  }
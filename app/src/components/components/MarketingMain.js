import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const MarketingMain= () => (
 <div className="container">
    <div className="row align-items-center">
          <div className="col-md-7">
              <div className="spacer-single"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 id="home-title">MegaEvolution <br/> Marketing</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="subtext" id="home-description">
              Lorem ipsum
              </p>

              <p className="subtext" id="home-subtext">
              <b>Believe In The Power Of TOGETHER And Find The Ultra-Cost-Efficinet Result You Won't Find Elsewhere! </b> 
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <span onClick={()=> window.open("#", "_self")} className="mega-btn-main inline lead">Register As Partners</span>
              <div className="mb-sm-30"></div>
              </Reveal>
          </div>
          <div className="col-md-5 xs-hide">
            <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
                <img src={process.env.PUBLIC_URL + "/img/misc/home-graphic.png"} className="img-fluid" alt=""/>
            </Reveal>
          </div>
      </div>
    </div>
);
export default MarketingMain;
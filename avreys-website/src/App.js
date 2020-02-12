import React, {useRef, useEffect, useState} from 'react';

import './App.css';
import {TweenMax, Power3} from 'gsap';


function App() {
  let app = useRef(null)
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circle1, .8, {width:300, height: 300, ease: Power3.easeInOut});
    setState(true);
  }

  
  const handleShrink = () => {
    TweenMax.to(circle1, .8, {width:100, height: 100, ease: Power3.easeInOut});
    setState(false);
  }


  useEffect(() => {
    TweenMax.to(app, 0,{css: {visibility: 'visible'}})
    // TweenMax.from(circle1, 2, {opacity: 0, x:40, ease: Power3.easeOut})
    // TweenMax.from(circle2, 2, {opacity: 0, x:40, ease: Power3.easeOut, delay: .2})
    // TweenMax.from(circle3, 2, {opacity: 0, x:40, ease: Power3.easeOut, delay: .4})
    TweenMax.staggerFrom([circle1, circle2, circle3], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .25)
  }, [] )


  return (
    <div 
    ref={el => app = el}
    className="App">
      <header className="App-header">
        <div id="socialContainer" className="circleContainer">
          <img className="logo" src="AvreyLogo.png" alt="avrey's logo" width="150" height="100"/>
          <div className="name">Avrey Brown</div>
          <img src="facebook.png" alt="github" width="40" height="40"/>
          <img src="linkedin.png" alt="github" width="40" height="40"/>
          <img src="github.png" alt="github" width="40" height="40"/>
        </div>
      </header>
      <section className="middleBox">
        <img className="profilePic" src="profile.png" alt="profile pic" width="300" height="300"/>
        <section id="subsection">
          <div id="textBox">Avrey Brown,<br/> Javascript Front End <br/>developer</div>
          <img className="divider" src="line.png" alt="divider" width="500" height="100"/>
        </section>
      </section>
      <div className="circleContainer">
          <div
            className="circle1"
            ref={el => circle1 = el}
            onClick={state !== true ? handleExpand : handleShrink}>
            My Work
          </div>
          <div 
            className="circle2" 
            ref={el => circle2 = el}
            onClick={state !== true ? handleExpand : handleShrink}>
            About Me
          </div>
          <div 
            className="circle3" 
            ref={el => circle3 = el}
            onClick={state !== true ? handleExpand : handleShrink}>
            Social Media
          </div>
      </div>
    </div>
  );
}

export default App;

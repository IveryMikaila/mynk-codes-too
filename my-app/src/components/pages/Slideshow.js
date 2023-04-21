import React from 'react';
import '../styles/Slideshow.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


const Slideshow = () => (
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>Page 1</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>Panel 2</span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span>Panel 3</span></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
);

export default Slideshow;
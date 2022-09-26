import React from 'react';
import $ from 'jquery';
import './MainCard.css';

import resume from './CameronBenassi.pdf';
import cam from './cam.png';
import linkedin from './linkedin.png';
import github from './github.png';


export default function MainCard(props) {
  if(props.transition != 'first'){
    $(function() {
      // $("#imgContainer,#textContainer,#btnContainer").removeClass('fade-up');
      // $("#imgContainer,#textContainer,#btnContainer").addClass('slide-left');
    });
  }
    

  return (
    <>
      <div class="flex flex-col columns-3" id="mainCardContainer">
        <div id="imgContainer" class="fade-up flex justify-center items-center">
          <img class="mt-[10vh] h-[275px] w-[275px]" src={cam}></img>
          {/* <img class="mt-[10vh] h-[35vh] w-[35vh]" src={cam}></img> */}
        </div>
        {/* fix on short height and long width */}
        <div class="pt-5 fade-up" id="textContainer">
          <div class="flex justify-center items-center xs:text-[4vw] sm:text-xl ">Hi, my name is</div>
          <div class="flex justify-center items-center xxs:text-5xl xs:text-[12vw] sm:text-6xl">Cam Benassi</div>
          <div class="flex justify-center items-center pt-3 xs:text-[4vw] sm:text-lg">
            <p class="text-center xs:w-[75vw] sm:w-96">I'm a senior at UMass Lowell studying Computer Science with a current focus in full stack web development.</p>
          </div>
        </div>
        <div id="btnContainer" class="fade-up">
          <div class="flex justify-center items-center mt-6">
            <a href={resume} without rel="noopener noreferrer" target="_blank">
              <button class="xs:w-[30vw] sm:w-[135px] xs:h-[12vw] sm:h-[50px] border-2 border-black" id="resumeButton">Resume</button>
            </a>
          </div>
          <div class="flex justify-center items-center mt-4">
            <a target="_blank" href="https://github.com/cambenassi">
              <img class="xs:w-[12vw] xs:h-[12vw] sm:w-[50px] sm:h-[50px] mr-[10px]" src={github} id="github"></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/cambenassi/">
              <img class="xs:w-[14vw] xs:h-[14vw] sm:w-[60px] sm:h-[60px] ml-[10px]" src={linkedin} id="linkedin"></img>
            </a>
          </div>
        </div>
      </div>

        {/* <div class="fade-in pt-5" id="textContainer">
          <div class="flex justify-center items-center xs:text-[4vw] sm:text-xl ">Hi, my name is</div>
          <div class="flex justify-center items-center xxs:text-5xl xs:text-[12vw] sm:text-6xl">Cam Benassi</div>
          <div class="flex justify-center items-center pt-3 xs:text-[4vw] sm:text-lg">
            <p class="text-center xs:w-[75vw] sm:w-96">I'm a senior at UMass Lowell studying Computer Science with a current focus in full stack web development.</p>
          </div>
        </div> */}
        {/* <div class="fade-in pt-5" id="textContainer">
          <div class="flex justify-center items-center xs:text-base sm:text-lg lg:text-xl xl:text-2xl">Hi, my name is</div>
          <div class="flex justify-center items-center xs:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">Cam Benassi</div>
          <div class="flex justify-center items-center xs:text-base sm:text-lg lg:text-xl xl:text-2xl pt-3">
            <p class="text-center xs:w-[75vw] sm:w-96">I'm a senior at UMass Lowell studying Computer Science with a current focus in full stack web development.</p>
          </div>
        </div> */}
    </>

    
  )
}

import React from 'react';
import $ from 'jquery';
import './MainCard.css';

import resume from './CameronBenassi.pdf';
import cam from './cam.png';
import linkedin from './linkedin.png';
import github from './github.png';

$(function() {
  $(document).on('click', '#resumeButton', function(){
    
  });
});

export default function MainCard() {
  return (
    <>
      <div class="ml-[15px] xxs:text-red-500 xs:text-blue-500 sm:text-purple-500 md:text-green-500 lg:text-orange-500" id="container">
        <div id="imgContainer" class="fade-in flex justify-center items-center">
          <img class="mt-[10vh] h-[35vh] w-[35vh]" src={cam}></img>
        </div>
        <div class="fade-in pt-5" id="textContainer">
          <div class="flex justify-center items-center sm:text-xl xs:text-[4vw]">Hi, my name is</div>
          <div class="flex justify-center items-center xxs:text-5xl xs:text-[12vw] sm:text-6xl">Cam Benassi</div>
          <div class="flex justify-center items-center pt-3 xs:text-[4vw] sm:text-lg">
            <p class="text-center xs:w-[75vw] sm:w-96">I'm a senior at UMass Lowell studying Computer Science with a current focus in full stack web development.</p>
          </div>
        </div>
        <div id="btnContainer">
          <div class="flex justify-center items-center mt-6">
            <a href={resume} without rel="noopener noreferrer" target="_blank">
              <button class="xs:w-[30vw] sm:w-[135px] xs:h-[12vw] sm:h-[50px] border-2 border-black" id="resumeButton">Resume</button>
            </a>
          </div>
          <div class="flex justify-center items-center mt-4">
            <a target="_blank" href="https://github.com/cambenassi">
              <img class="xs:w-[12vw] xs:h-[12vw] sm:w-[50px] sm:h-[50px] mr-[10px]" src={github} id="github"></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/cameron-benassi-5750861a4/">
              <img class="xs:w-[14vw] xs:h-[14vw] sm:w-[60px] sm:h-[60px] ml-[10px]" src={linkedin} id="linkedin"></img>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      {/* <div class="ml-[15px] xs:inline md:hidden" id="container">
        <div id="imgContainer" class="fade-in flex justify-center items-center">
          <img class="mt-[5vh] h-[35vh] w-[35vh]" src={cam}></img>
        </div>
        <div class="fade-in pt-10" id="textContainer">
          <div class="flex justify-center items-center text-xs">Hi, my name is</div>
          <div class="flex justify-center items-center xxs:text-3xl xs:text-4xl">Cam Benassi</div>
          <div class="flex justify-center items-center pt-3 text-sm">
            <p class="text-center w-[70vw]">I'm a senior at UMass Lowell studying Computer Science with a current focus in full stack web development.</p>
          </div>
        </div>
        <div id="btnContainer">
          <div class="flex justify-center items-center mt-6">
          </div>
          <div class="flex justify-center items-center mt-4">
            <a target="_blank" href="https://github.com/cambenassi">
              <img class="w-[40px] h-[40px] mr-[10px]" src={github}></img>
            </a>
            <button class="w-[135px] h-[40px] border-2 border-black" id="resumeButton">Resume</button>
            <a target="_blank" href="https://www.linkedin.com/in/cameron-benassi-5750861a4/">
              <img class="w-[50px] h-[50px] ml-[6px]" src={linkedin}></img>
            </a>
          </div>
        </div>
      </div> */}
    </>
  )
}

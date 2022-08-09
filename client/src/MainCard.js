import React from 'react';
import $ from 'jquery';
import './MainCard.css';

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
      <div>
        <div class="ml-[15px]" id="container">
          <div id="imgContainer" class="fade-in flex justify-center items-center">
            <img class="mt-[10vh] h-[35vh] w-[35vh]" src={cam}></img>
          </div>
          <div class="fade-in pt-7" id="textContainer">
            <div class="flex justify-center items-center">Hi, my name is</div>
            <div class="flex justify-center items-center text-6xl">Cam Benassi</div>
            <div class="flex justify-center items-center pt-3 ">
              <p class="text-center">I'm a senior at UMass Lowell studying Computer Science <br></br> with a current focus in full stack web development.</p>
            </div>
          </div>
          <div id="btnContainer">
            <div class="flex justify-center items-center mt-6">
              <button class="w-[135px] h-[50px] border-2 border-black" id="resumeButton">Resume</button>
            </div>
            <div class="flex justify-center items-center mt-4">
              <a target="_blank" href="https://github.com/cambenassi">
                <img class="w-[50px] h-[50px] mr-[10px]" src={github}></img>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/cameron-benassi-5750861a4/">
                <img class="w-[60px] h-[60px] ml-[10px]" src={linkedin}></img>
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* <div class="absolute" id="wrapper">
        <div class="bg-[#131313] h-[75vh] pt-[5vh] grid grid-cols-2 fixed z-[-99] top-0" id="container">
            <div class="" id="col1">
              <img class="inline h-[50vh] w-[50vh] ml-[10vh] mt-[5vh]" src={cam}></img>
            </div>
            <div class="" id="col2">

            </div>
        </div>
      </div> */}

      {/* <div class="bg-[#131313] h-[75vh] pt-[5vh] grid grid-cols-2" id="container">
        <div class="" id="col1">
          <img class="inline h-[35vh] w-[35vh] ml-[10vh] mt-[5vh]" src={cam}></img>
        </div>
        <div class="flex flex-col justify-center items-center" id="col2">
          <h1 class="text-center text-white text-9xl">Hi, I'm Cam.</h1>
          <h3 class="text-center text-white text-3xl pt-[2.5vh]">A senior at UMass Lowell studying Computer Science, with a focus in full stack web development.</h3>
        </div>
      </div> */}
    </>
  )
}

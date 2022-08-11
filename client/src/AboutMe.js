import React from 'react';

import angular from './Icons/angular.png';
import css from './Icons/css3.png';
import dotnet from './Icons/dotnet.png';
import html from './Icons/html5.png';
import javascript from './Icons/javascript.png';
import mongodb from './Icons/mongodb.png';
import mysql from './Icons/mysql.png';
import nodejs from './Icons/nodejs.png';
import postgresql from './Icons/postgresql.png';
import python from './Icons/python.png';
import react from './Icons/react.png';
import typescript from './Icons/typescript.png';
import cpp from './Icons/cpp.png';
import c from './Icons/c.png';
import x86 from './Icons/x86.png';
import mips from './Icons/mips.png';


export default function AboutMe() {
  return (
    <>
      <div class=" mx-10 pb-10 rounded-b-2xl" id="aboutMeContainer">
        <h1 class="flex justify-center pt-[40px] font-light xs:text-5xl md:text-6xl">About Me</h1>
        <div class="xs:inline md:flex pt-[60px]" id="columnsWrapper">
          <div class="xs:w-[85vw] xs:ml-0 w-[50vw] md:ml-48" id="col1">
            <div role="status" class="">
              <div class="flex justify-center items-center w-40 h-28 bg-gray-300 rounded sm:w-96 dark:bg-gray-500">
                  <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-[50vw] text-center mr-48 pt-5" id="col2">
            <h3 class="text-3xl">Who am I?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div id="technologies">
          <h2 class="flex justify-center pt-[100px] text-4xl">Technologies</h2>
          <div id="webDevContainer">
            <p class="flex justify-center items-center pt-[30px] italic">Web Development</p>
            <div class="flex justify-center text-center pt-[15px]" id="webDevIcons">
              <img class="h-20 w-20 mr-5" src={html} title="HTML"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={css} title="CSS"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={javascript} title="JavaScript"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={typescript} title="TypeScript"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={nodejs} title="NodeJS"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={react} title="React"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={angular} title="Angular"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={dotnet} title=".NET Core"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={mongodb} title="MongoDB"></img>
              <img class="h-20 w-20 ml-[10px] mr-[10px]" src={mysql} title="MySQL"></img>
              <img class="h-20 w-20 ml-5" src={postgresql} title="PostgreSQL"></img>
            </div>
          </div>
          <div id="embeddedContainer">
            <p class="flex justify-center items-center pt-[30px] italic">Embedded Software</p>
            <div class="flex justify-center text-center pt-[15px]" id="embeddedIcons">
              <img class="h-20 w-18 mr-5" src={cpp} title="C++"></img>
              <img class="h-20 w-18 mr-[10px] ml-[10px]" src={c} title="C"></img>
              <img class="h-20 w-18 mr-[10px] ml-[10px]" src={python} title="Python"></img>
              <img class="h-20 w-18 mr-[10px] ml-[10px]" src={x86} title="x86 Assembly"></img>
              <img class="h-20 w-18 mr-[10px] ml-[10px]" src={mips} title="MIPS Assembly"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

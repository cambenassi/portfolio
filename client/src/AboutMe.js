import React from 'react';
import $ from 'jquery';

import football from './football.jpg';
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

import './AboutMe.css';

export default function AboutMe(props) {
  return (
    <>
      <div id="aboutMeContainer">
        <br id="aboutMeSpacing" />
        <h1 id="aboutMeHeader" class="pt-10 xs:text-5xl md:text-6xl text-center font-normal">About Me</h1>
        <div class="grid xs:grid-cols-1 lg:grid-cols-2 place-items-center">  
          <div class="pt-[vh]" id="aboutMeText">
            {/* morph header of next section into previous, make header sticky at top until ready to scroll */}
            {/* keep this header at the bottom of the screen, out of scrollable view */}
            <div class="borders1 xs:w-[90vw] md:w-[70vw] lg:w-[40vw] p-10 h-fit" id="">
              <h1 class="xs:text-5xl md:text-6xl font-normal">Who am I?</h1> 
              <p class="pt-5">Hi, I'm Cam! As I mentioned above, I am a senior at UMass Lowell studying Computer Science. I have a real passion for technology in general and especially for programming. I have been building computers for almost a decade so it only makes sense that I went on to learn how to build software too. Some of my hobbies are technology in general, nutrition/weight lifting, basketball, football, and cars.</p>
            </div>
          </div>
          <div class="pt-[10vh]" id="mainTechnologies">
            <div class="borders2 xs:w-[90vw] md:w-[70vw] lg:w-[40vw] xs:p-5 md:p-10 h-fit">
              <h1 class="block xs:text-5xl pb-5 text-right font-normal">The Tools I Use</h1> 
              <div class="xs:hidden sm:inline">
                <div class="flex justify-between place-content-center pb-10" id="row1">
                  <img class="h-20 w-20" title="React" src={react}/>
                  <img class="h-20 w-20" title="Angular" src={angular}/>
                  <img class="h-20 w-20" title=".NET" src={dotnet}/>
                  <img class="h-20 w-20" title="NodeJS" src={nodejs}/>
                </div>
                <div class="flex justify-between pb-10" id="row2">
                  <img class="h-20 w-20" title="JavaScript" src={javascript}/>
                  <img class="h-20 w-20" title="TypeScript" src={typescript}/>
                  <img class="h-20 w-20" title="MongoDB" src={mongodb}/>
                  <img class="h-20 w-20" title="MySQL" src={mysql}/>
                </div>
                <div class="flex justify-between" id="row3">
                  <img class="h-20 w-18 pl-2 " title="C" src={c}/>
                  <img class="h-20 w-18 pl-2 " title="C++" src={cpp}/>
                  <img class="h-20 w-18 pl-2 " title="Python" src={python}/>
                  <img class="h-20 w-18 pl-2 " title="x86 Assembly Languages" src={x86}/>
                </div>
              </div>
              <div class="xs:inline sm:hidden">
                <div class="flex justify-between place-content-center pb-10" id="row1">
                  <img class="h-20 w-20" title="React" src={react}/>
                  <img class="h-20 w-20" title="Angular" src={angular}/>
                  <img class="h-20 w-20" title=".NET" src={dotnet}/>
                </div>
                <div class="flex justify-between pb-10" id="row2">
                  <img class="h-20 w-20" title="NodeJS" src={nodejs}/>
                  <img class="h-20 w-20" title="JavaScript" src={javascript}/>
                  <img class="h-20 w-20" title="TypeScript" src={typescript}/>
                </div>
                <div class="flex justify-between" id="row3">
                  <img class="h-20 w-20" title="MongoDB" src={mongodb}/>
                  <img class="h-20 w-20" title="MySQL" src={mysql}/>
                  <img class="h-20 w-18 pl-2 " title="Python" src={python}/>
                </div>
                <div class="flex justify-between" id="row4">
                  <img class="h-20 w-18 pl-2 " title="C" src={c}/>
                  <img class="h-20 w-18 pl-2 " title="C++" src={cpp}/>
                  <img class="h-20 w-18 pl-2 " title="x86 Assembly Languages" src={x86}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// xs:w-[80vw] md:w-[40vw] p-10 xs:ml-0 md:ml-40 h-80

{/* <div class="slideRight mx-10 pb-10 rounded-b-2xl slide-right" id="aboutMeContainer">
        <h1 class="xs:pt-[20px] md:pt-[40px] font-light xs:text-5xl md:text-6xl">About Me</h1>
        
        <div class="xs:inline md:grid md:grid-cols-2 pt-10" id="columnWrapper">
          <div class="items-center xs:pt-8 md:pt-0" id="col1">
              <div class="xs:pt-0 md:pt-10 items-center xs:w-[90%] xs:h-40 md:w-[75%] md:h-64">
                <img class="rounded-2xl" src={football}></img>
              </div>
          </div>
          <div class="text-center pt-8" id="col2">
            <h3 class="text-3xl">Who am I?</h3>
            <p class="pt-2 xs:text-[4vw] md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class="flex justify-between " id="technologies">
          <h2 class="xs:pt-[55px] md:pt-[100px] text-3xl">Technologies</h2>
          <div class="flex justify-between " id="webDevContainer">
            <p class="items-center text-center xs:pt-[10px] md:pt-[30px] italic">Web Development</p>
            <div class="xs:grid xs:grid-cols-3 md:items-center pt-[15px] overflow-scroll" id="webDevIcons">
              <img class="h-20 w-20 ml-[10px] md:ml-[10px] md:mr-5" src={html} title="HTML"></img>
              <img class="icon" src={css} title="CSS"></img>
              <img class="icon" src={javascript} title="JavaScript"></img>
              <img class="icon" src={typescript} title="TypeScript"></img>
              <img class="icon" src={nodejs} title="NodeJS"></img>
              <img class="icon" src={react} title="React"></img>
              <img class="icon" src={angular} title="Angular"></img>
              <img class="icon" src={dotnet} title=".NET Core"></img>
              <img class="icon" src={mongodb} title="MongoDB"></img>
              <img class="icon" src={mysql} title="MySQL"></img>
              <img class="h-20 w-20 ml-[10px] md:ml-5" src={postgresql} title="PostgreSQL"></img>
            </div>
          </div>
          <div class="flex justify-between " id="embeddedContainer">
            <p class="items-center pt-[30px] italic">Embedded Software</p>
            <div class="text-center pt-[15px]" id="embeddedIcons">
              <img class="h-20 w-18 pl-2  mr-5" src={cpp} title="C++"></img>
              <img class="h-20 w-18 pl-2  mr-[10px] ml-[10px]" src={c} title="C"></img>
              <img class="h-20 w-18 pl-2  mr-[10px] ml-[10px]" src={python} title="Python"></img>
              <img class="h-20 w-18 pl-2  mr-[10px] ml-[10px]" src={x86} title="x86 Assembly"></img>
              <img class="h-20 w-18 pl-2  mr-[10px] ml-[10px]" src={mips} title="MIPS Assembly"></img>
            </div>
          </div>
        </div>
</div> */}

{/* <div class="xs:inline md:grid md:grid-cols-2 pt-[60px]" id="columnsWrapper">
          <div class="xs:w-[100vw] items-center md:w-[50vw] md:ml-48" id="col1">
            <div role="status" class="">
              <div class="items-center w-56 h-64 bg-gray-300 rounded sm:w-96 dark:bg-gray-500">
                  <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
              </div>
            </div>
          </div>
          <div class="text-center" id="col2">
            <h3 class="text-3xl">Who am I?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div> */}



      //   <br id="aboutMeSpacing" />
      // <div class="pt-[5vh] lg:pr-[40vw]" id="aboutMeText">
      //   {/* morph header of next section into previous, make header sticky at top until ready to scroll */}
      //   {/* keep this header at the bottom of the screen, out of scrollable view */}
      //   <div class="borders1 xs:w-[90vw] md:w-[70vw] lg:w-[40vw] p-10 h-fit" id="">
      //     <h1 class="xs:text-5xl md:text-6xl font-normal">About Me</h1> 
      //     <p class="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      //   </div>
      // </div>
      // <div class="pt-[10vh] lg:pl-[40vw]" id="mainTechnologies">
      //   <div class="borders2 xs:w-[90vw] md:w-[70vw] lg:w-[40vw] p-10 h-fit">
      //     <h1 class="xs:text-5xl md:text-6xl pb-10 text-right font-normal">Some Things I Use</h1> 
      //     <div class="flex justify-between pb-10" id="row1">
      //       <img class="h-20 w-20" title="React" src={react}/>
      //       <img class="h-20 w-20" title="Angular" src={angular}/>
      //       <img class="h-20 w-20" title=".NET" src={dotnet}/>
      //       <img class="h-20 w-20" title="NodeJS" src={nodejs}/>
      //     </div>
      //     <div class="flex justify-between pb-10" id="row2">
      //       <img class="h-20 w-20" title="JavaScript" src={javascript}/>
      //       <img class="h-20 w-20" title="TypeScript" src={typescript}/>
      //       <img class="h-20 w-20" title="MongoDB" src={mongodb}/>
      //       <img class="h-20 w-20" title="MySQL" src={mysql}/>
      //     </div>
      //     <div class="flex justify-between" id="row3">
      //       <img class="h-20 w-18 pl-2 " title="C" src={c}/>
      //       <img class="h-20 w-18 pl-2 " title="C++" src={cpp}/>
      //       <img class="h-20 w-18 pl-2 " title="Python" src={python}/>
      //       <img class="h-20 w-18 pl-2 " title="x86 Assembly Languages" src={x86}/>
      //     </div>
      //   </div>
      //   {/* <div class="borders2 w-[90vw] h-fit p-10">
      //     <h1 class="xs:text-5xl md:text-6xl pb-10 text-center font-normal">Some Things I Use</h1> 
      //     <div class="flex justify-between">
      //       <img class="h-20 w-20" src={react}/>
      //       <img class="h-20 w-20" src={angular}/>
      //       <img class="h-20 w-20" src={dotnet}/>
      //       <img class="h-20 w-20" src={typescript}/>
      //       <img class="h-20 w-20" src={nodejs}/>
      //       <img class="h-20 w-20" src={mongodb}/>
      //       <img class="h-20 w-20" src={postgresql}/>
      //       <img class="h-20 w-20" src={mysql}/>
      //       <img class="h-20 w-18 pl-2 " src={c}/>
      //       <img class="h-20 w-18 pl-2 " src={cpp}/>
      //       <img class="h-20 w-18 pl-2 " src={python}/>
      //       <img class="h-20 w-18 pl-2 " src={x86}/>
      //     </div>
      //   </div> */}
      // </div>


      // <div class="pt-[5vh] lg:pr-[40vw]" id="aboutMeText">
      //   {/* morph header of next section into previous, make header sticky at top until ready to scroll */}
      //   {/* keep this header at the bottom of the screen, out of scrollable view */}
      //   <div class="borders1 xs:w-[90vw] md:w-[70vw] lg:w-[40vw] p-10 h-fit" id="">
      //     <h1 class="xs:text-5xl md:text-6xl font-normal">About Me</h1> 
      //     <p class="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      //   </div>
      // </div>
      // <div class="pt-[10vh] lg:pl-[40vw]" id="mainTechnologies">
      //   <div class="borders2 xs:w-[90vw] md:w-[70vw] lg:w-[40vw] p-10 h-fit">
      //     <h1 class="xs:text-5xl md:text-6xl pb-10 text-right font-normal">Some Things I Use</h1> 
      //     <div class="flex justify-between pb-10" id="row1">
      //       <img class="h-20 w-20" title="React" src={react}/>
      //       <img class="h-20 w-20" title="Angular" src={angular}/>
      //       <img class="h-20 w-20" title=".NET" src={dotnet}/>
      //       <img class="h-20 w-20" title="NodeJS" src={nodejs}/>
      //     </div>
      //     <div class="flex justify-between pb-10" id="row2">
      //       <img class="h-20 w-20" title="JavaScript" src={javascript}/>
      //       <img class="h-20 w-20" title="TypeScript" src={typescript}/>
      //       <img class="h-20 w-20" title="MongoDB" src={mongodb}/>
      //       <img class="h-20 w-20" title="MySQL" src={mysql}/>
      //     </div>
      //     <div class="flex justify-between" id="row3">
      //       <img class="h-20 w-18 pl-2 " title="C" src={c}/>
      //       <img class="h-20 w-18 pl-2 " title="C++" src={cpp}/>
      //       <img class="h-20 w-18 pl-2 " title="Python" src={python}/>
      //       <img class="h-20 w-18 pl-2 " title="x86 Assembly Languages" src={x86}/>
      //     </div>
      //   </div>
      // </div>
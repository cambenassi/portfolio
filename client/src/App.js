import React, {useState} from 'react';
import $ from 'jquery';

import MainCard from './MainCard';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';

import './App.css';

export default function App() {
  $(function(){
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
  
    $(window).on('scroll', function(){
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    });

    $("#aboutMe").on('click', function() {
      $("html").animate(
        { scrollTop: $("#aboutMeSpacing").offset().top -20}, 800);
    })
    
    $("#experience").on('click', function() {
      $("html").animate(
        { scrollTop: $("#experienceSpacing").offset().top -60}, 800);
    })

    $("#projects").on('click', function() {
      $("html").animate(
        { scrollTop: $("#projectSpacing").offset().top -60}, 800);
    })
  })
  
  return (
    <>
      <div class="" id="contentWrapper">
        <MainCard />
        <footer id="navbar" class="z-[999]w-full xs:pb-3 md:pb-5 pr-3">
          <ul class="pt-4 mt-4 text-center sticky flex items-center justify-center">
            <li id="aboutMe" class="text-xl sm:text-xl hover:cursor-pointer xs:mr-5 sm:mr-6 md:mr-16">About Me</li>
            <li id="experience" class="text-xl sm:text-xl hover:cursor-pointer">Experience</li>
            <li id="projects" class="text-xl sm:text-xl hover:cursor-pointer xs:ml-5 sm:ml-6 md:ml-16">Projects</li>
          </ul>
        </footer>
        <AboutMe />
        <Experience />
        <Projects />
        {/* move element to the right, scrollbar on left w/ shortcuts to sections */}
      </div>
      
    </>
  )
}

// state = {
  //   page: 'initialHome'
  // }

  // render(){
  //   const display = this.state.page == 'initialHome' ? (
  //     <MainCard transition="first"/>
  //   ) : this.state.page == 'home' ? (
  //     <MainCard transition ="slideLeft"/>
  //   ) : this.state.page == 'aboutRight' ? (
  //     <AboutMe transition ="slideRight"/>
  //   ) : this.state.page == 'aboutLeft' ? (
  //     <AboutMe transition ="slideLeft"/> 
  //   ) : this.state.page == 'experience' ? (
  //     <Experience />
  //   ) : null; 

    
    



{/* <ul class="pt-4 text-center flex items-center justify-center">
            <li onClick={() => {
            if(this.state.page == 'aboutRight' || this.state.page == 'aboutLeft')
              this.setState({page: 'home'});
            else if(this.state.page == 'experience')
              this.setState({page : 'aboutRight'});
            else
              this.setState({page : 'aboutRight'});
            
            }} id="aboutMe" class="text-xl sm:text-xl hover:cursor-pointer xs:mr-5 sm:mr-6 md:mr-16">About Me</li>

            <li onClick={() => {
            if(this.state.page == 'experience')
              this.setState({page: 'home'});
            else
              this.setState({page : 'experience'});
            }} class="text-xl sm:text-xl hover:cursor-pointer">Experience</li>

            <li class="text-xl sm:text-xl hover:cursor-pointer xs:ml-5 sm:ml-6 md:ml-16">Projects</li>
    </ul> */}










{/* <div id="wrapper">
          <div id="a" class="panels">
            <MainCard />
          </div>
          <div id="b" class="panels">
            <Scrollable />
          </div>
          <div id="c" class="panels"></div>
          <div id="d" class="panels"></div>
      </div> */}

{/* <div class="sticky bottom-0" id='nav_bar'>
      <ul class='nav_links text-center' id="nav_links">
          <li id="aboutMe" class="xs:mr-8 md:mr-20 xs:text-[4.5vw] md:text-xl hover:cursor-pointer">About Me</li>
          <li id="experience" class="xs:text-[4.5vw] md:text-xl hover:cursor-pointer">Experience</li>
          <li id="projects" class="xs:ml-8 md:ml-20 xs:text-[4.5vw] md:text-xl hover:cursor-pointer">Projects</li>
      </ul>
    </div> */}
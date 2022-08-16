import React from 'react';
import $ from 'jquery';
import './Header.css'
import home from './home.png';

$(function(){
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        //console.log($(window).scrollTop())

      let height = $( window ).height();

      if ($(window).scrollTop() > height * .885) {
        $('#nav_bar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < height * .885 + 1) {
        $('#nav_bar').removeClass('navbar-fixed');
      }
    });
    
    $("#homeIcon").on("click", function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
      
    const [red, green, blue] = [255, 255, 255];
    window.addEventListener('scroll', () => {
      $("#nav_links").addClass("scrolled");
      let y = 1 + (window.scrollY || window.pageYOffset) / 1050;
      y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
      if(r > 240)
        $("#nav_bar").css("background-color",`rgb(${r}, ${g}, ${b})`);

      $("#nav_links").css("opacity", "1");
      $("#nav_links").css("animation", ".0001");
    });

    $(document).on('click', '#aboutMe', function () {
      $("html").animate(
        { scrollTop: $("#aboutMeContainer").offset().top -100}, 800);
    });

    $(document).on('click', '#experience', function () {
      $("html").animate(
        { scrollTop: $("#experienceContainer").offset().top -80}, 800);
    });

    $(document).on('click', '#projects', function () {
      alert("");
    });
});

export default function Header() {
  return (
    <>
      {/* Desktop View */}
      <div class="">
        <div class="bg-white text-white w-full h-12 fixed top-0">_</div>
        <div class="" id='nav_bar'>
            <ul class='nav_links text-center' id="nav_links">
                <li id="aboutMe" class="xs:mr-8 md:mr-20 xs:text-[4.5vw] md:text-xl hover:cursor-pointer">About Me</li>
                <li id="experience" class="xs:text-[4.5vw] md:text-xl hover:cursor-pointer">Experience</li>
                <li id="projects" class="xs:ml-8 md:ml-20 xs:text-[4.5vw] md:text-xl hover:cursor-pointer">Projects</li>
                {/* <button class="text-white text-xl float-right mr-[1.5vw] mt-1">Contact Me</button> */}
            </ul>
        </div>
      </div>
    </>
  )
}

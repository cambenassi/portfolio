import React from 'react';
import $ from 'jquery';

import Header from './Header';
import AboutMe from './AboutMe';
import './Scrollable.css';
import Experience from './Experience';

$(function () {
  window.addEventListener('scroll', function() {
    if($("#nav_bar").hasClass('navbar-fixed'))
      $("#contentWrapper").addClass("push-down");
    else {
      $("#contentWrapper").removeClass("push-down");
    }
  })
});

export default function Scrollable() {
  return (
    <>
      <div id="container" class="bg-black rounded-t-2xl z-[1000] relative">
        <div id="headerWrapper" class="">
            <Header />
        </div>
        <div class="" id="contentWrapper">
            <AboutMe />
            <Experience />
            <div class="h-[100vh]"></div>
            <div class="h-[100vh]"></div>
            <div class="h-[100vh]"></div>
        </div>
      </div>
    </>
  )
}

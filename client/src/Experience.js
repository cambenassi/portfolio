import React from 'react'
import $ from 'jquery'

import Company from './Company';
import exp from './exp.json';

import CGP from './jobLogos/cgp.png';
import revolusun from './jobLogos/revolusun.png';
import mwra from './jobLogos/mwra.png';

export default function Experience() {

  $(function(){
    //when mwra section completley touches header transition out
    let CGP = document.querySelector('#CGP');
    let Revolusun = document.querySelector('#revolusun');
    let MWRA = document.querySelector('#MWRA'); 

    window.addEventListener('scroll', () => {
      let coordCGP = CGP.getBoundingClientRect();
      let coordRevolusun = Revolusun.getBoundingClientRect();
      let coordMWRA = MWRA.getBoundingClientRect();

      if(coordCGP.bottom * .95 > coordRevolusun.top) {
        $("#CGP").css("opacity", (coordRevolusun.top / coordCGP.bottom)) 
      }

      if(coordRevolusun.bottom * .95 > coordMWRA.top) {
        $("#CGP").css("opacity", 0) 
        $("#revolusun").css("opacity", (coordMWRA.top / coordRevolusun.bottom)) 
      }
  
    });
    
  })

  return (
    <>
        <div id="expWrapper" class="w-full pt-16">
          <h1 id="expHeader" class="sticky top-[40px] pt-10 xs:text-5xl md:text-6xl text-center font-normal">Experience</h1> 
          <br class="" id="experienceSpacing"/>
          {/* ----- Experience ----- */}
          {/* https://stackoverflow.com/questions/71215916/how-to-create-scroll-triggered-animations-with-fixed-position-in-react */}
          {/* popout scrollbar with timeline of all jobs w/ quickaccess */}
          <div id="CGP" class="sticky top-[140px] flex justify-center pb-[50px]">
            <Company info={exp.CGP} image={CGP}/>
          </div>
          <br></br>
          <div id="revolusun" class="sticky top-[140px] flex justify-center pb-[50px]">
            <Company info={exp.RevoluSun} image={revolusun}/>
          </div>
          <div id="MWRA" class="sticky top-[140px] flex justify-center pb-[50px] mb-1 bg-white">
            <Company info={exp.MWRA} image={mwra}/>
          </div>
        </div>
    </>
  )
}

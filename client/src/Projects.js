import React from 'react'
import './ProjectIndividual'
import ProjectIndividual from './ProjectIndividual'

import proj from './proj.json'

export default function Projects() {
  return (
    <>
        <div id="projWrapper" class="w-full h-fit pb-40 ">
          <br class="" id="projectSpacing"/>
          <div class="sticky xs:top-[55px] xs:pt-5 lg:top-[60px] xs:text-5xl md:text-6xl w-full bg-white h-[12.5vh] text-center font-normal z-[900] border-b-[1px] border-black ">
            <h1 class="" id="projHeader" >Projects</h1>
          </div>
          <div class="top-[180px] grid place-items-center xs:grid-cols-1 lg:grid-cols-3 pt-[5vh] justify-center text-center w-full">
            <ProjectIndividual info={proj.portfolio}/>
            <ProjectIndividual info={proj.Spiderweb}/>
            <ProjectIndividual info={proj.StockTracker}/>
          </div>
          <div class="sticky top-[180px] grid place-items-center xs:grid-cols-1 lg:grid-cols-2 xs:pt-0 lg:pt-[2.5vh] justify-center text-center w-full">
            <ProjectIndividual info={proj.EvilHangman}/>
            <ProjectIndividual info={proj.SolarSystem}/>
          </div>
        </div>
        
    </>
  )
}

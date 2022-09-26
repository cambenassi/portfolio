import React from 'react'
import './Company.css'

export default function Company(props) {
    let companyName;
    if(props.info.textSize)
        companyName = <a href={props.info.link} without rel="noopener noreferrer" target="_blank"><h1 id="companyName" class="mt-10 lg:ml-10 xs:justify-center xs:text-center lg:justify-start lg:text-left xs:text-3xl md:text-4xl font-normal">{props.info.name}</h1></a>
    else
        companyName = <a href={props.info.link} without rel="noopener noreferrer" target="_blank"><h1 id="companyName" class="mt-10 lg:ml-10 xs:justify-center xs:text-center lg:justify-start lg:text-left xs:text-4xl md:text-5xl font-normal">{props.info.name}</h1></a>

    let thirdElement
    if(props.info.name == "RevoluSun Massachusetts")
        thirdElement = null
    else
        thirdElement = <li class="xs:text-lg lg:text-2xl pt-2">{props.info.responsibilities[3]}</li>


  return (

    <>
        <div id="companyContainer" class=" bordersFull w-[80vw] h-fit pb-9 min-w-[80vw]">
            <div class="flex m-1">
                <div class="w-fit">
                    <a class="xs:hidden md:inline" href={props.info.link} without rel="noopener noreferrer" target="_blank"><img src={props.image} class="mt-10 ml-10 md:h-40 md:w-40 lg:h-60 lg:w-60"></img></a>
                </div>
                <div class="xs:w-full lg:w-fit">
                    {companyName}
                    <h3 id="positionName" class="mt-3 lg:ml-10 xs:justify-center xs:text-center lg:justify-start lg:text-left text-3xl">{props.info.position}</h3>
                    <h3 id="duration" class="mt-3 lg:ml-10 xs:justify-center xs:text-center lg:justify-start lg:text-left text-xl text-gray-600">{props.info.duration}</h3>
                </div>
            </div>
            <div class="m-1 ml-10 mt-10">
                {/* <h3 id="responsibilities" class="text-3xl">Responsibilities</h3> */}
                {/* change to for each loop in responsibilities */}
                <ul class="xs:ml-0 lg:ml-10 list-disc">
                    <li class="xs:text-lg lg:text-2xl">{props.info.responsibilities[0]}</li>
                    <li class="xs:text-lg lg:text-2xl pt-2">{props.info.responsibilities[1]}</li>
                    <li class="xs:text-lg lg:text-2xl pt-2">{props.info.responsibilities[2]}</li>
                    {thirdElement}
                </ul>
            </div>
        </div>
    </>
  )
}

import React from 'react'
import github from './github.png'
import bitbucket from './bitbucket.png'

export default function ProjectIndividual(props) {
    let gitButton;
    if(props.info.link){
        if(props.info.linkType == 'BitBucket')
            gitButton = <a class="pt-8" href={props.info.link} without rel="noopener noreferrer" target="_blank"><img title="Open BitBucket Repository" id="gitButton" class="w-14 h-16" src={bitbucket}></img></a>
        else
            gitButton = <a class="pt-8" href={props.info.link} without rel="noopener noreferrer" target="_blank"><img title="Open GitHub Repository" id="gitButton" class="w-16 h-16" src={github}></img></a>
    }
    else
        gitButton = <div></div>
    

  return (
    <>
        <div class="bordersFull xs:w-[80vw] lg:w-[30vw] mb-20 h-fit pb-5 project">
            <h1 class="pt-5 text-3xl font-normal">{props.info.name}</h1>
            <p class="pt-2 italic">{props.info.technologies}</p>
            <p class="pt-2 italic">{props.info.duration}</p>
            <p class="pt-5 w-fit px-8">{props.info.desc}</p>

            <div class="flex items-center justify-center">
                {gitButton}
            </div>
        </div>
    </>
  )
}

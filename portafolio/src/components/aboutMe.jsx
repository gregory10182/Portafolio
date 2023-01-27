import React from 'react'
import '../css/AboutMe.css'


export default function AboutMe(){
    return(
        <div className='aboutMe'>
            <h1>About me</h1>
            <p>Recently graduated software engineer focused in full stack web development</p>
            <button className='CV'>Download CV</button>
        </div>
    )
}
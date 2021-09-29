import React from 'react'
import {Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

function Showcase() {
    return (
        <div className="Showcase" >
           <h1> <Typewriter
            onInit={(typewriter) => 
            {typewriter.typeString("Welcome!").start();
            }}/></h1>
            <p >Click on the button below to view projects.</p>
            <div>
                <button><Link to="third_page" smooth={true} duration={1000}> View projects</Link> </button>
            </div>
        </div>
    )
}

export default Showcase

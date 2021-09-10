import React from 'react'
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
                <button> View projects </button>
            </div>
        </div>
    )
}

export default Showcase

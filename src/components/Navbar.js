import React from 'react';
import {Link } from 'react-scroll';
import Showcase from './Showcase';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';






const Navbar = () => {
    return (
        <div>
            <div className="first_page">
                <nav>
                    <div className="logo">
                        <h4 style={{paddingLeft: '10px', fontSize: '25px',  color:"rgba(255, 255, 255, 0.85)"}}>Mahroo Rahman</h4>
                    </div>
                    <ul className="navLinks">
                        
                        <li className="link"><Link to="second_page" smooth={true} duration={700}> About </Link></li>
                        <li className="link"><Link to="third_page" smooth={true} duration={1000}> Projects</Link></li>
                        <li className="link"><Link to="fourth_page" smooth={true} duration={1000}> Resume </Link></li>
                    </ul>
                </nav>

                <div className="main">
                    <Showcase/>
                </div>
            </div>

            <div id="second_page">
                <About/>
            </div>

            <div id="third_page">
                <Projects/>
            </div>
            <div id="fourth_page">
                <Resume/>
            </div>
        </div>
    )
}

export default Navbar

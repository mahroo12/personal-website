import React from 'react'
import {Link } from 'react-scroll';

function About() {
    return (
        <div style={{backgroundColor: "black", height: "100vh"}}>
           <div className="abt-wrapper" style={{display: "flex", justifyContent: "space-between"}}>
                <div className="picture">
                   <img src={require('./linkedin.jpg').default} alt="headshot" 
                                height={450} width={330} 
                                style={{marginLeft: '100px', marginTop: '60px'}}></img>
                </div> 
                <div className="text-abt-me" style={{marginRight: '100px'}}>
                    <h1 style={{color: "white",  marginTop: '90px', marginRight: '250px', letterSpacing: '3px'}}>About Me</h1>
                    <h2 style={{color: "white", marginTop: '20px', letterSpacing: '2px'}}>Hi, I'm Mahroo!</h2>
                    <p style={{lineHeight: '1.6em', color: "white", marginTop: '20px', fontSize: '20px', textAlign: 'left'}}>
                        I am a final year Software Engineering Student at McGill <br/>
                    and I am looking to gain experience in the field. I am passionate <br/>
                    about developing software solutions and am always looking for <br/> 
                    opportunities in the field. </p>
                    <div className= "button-wrapper" style={{display: "flex", justifyContent:'space-between'}}>
                        <div className="resume-button">
                            <button   style= {{
                                color: '#FFF',
                                background: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.33)',
                                boxSizing: 'border-box',
                                borderRadius: '999px',
                                padding: '16px 24px',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '16px',
                                width: 'fit-content',
                                marginTop: '50px',
                                marginBottom: '80px',
                                cursor: 'pointer',
                                transition: '0.4s ease',
                                
                            }}><a style={{color: 'white'}} href={require('./MahrooRahman.pdf').default}>Resume</a></button>
                        </div>
                        <div>
                        <button style= {{
                                color: '#FFF',
                                background: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.33)',
                                boxSizing: 'border-box',
                                borderRadius: '999px',
                                padding: '16px 24px',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '16px',
                                width: 'fit-content',
                                marginTop: '50px',
                                marginBottom: '80px',
                                marginRight: '280px',
                                cursor: 'pointer',
                                transition: '0.4s ease',
                                
                            }}><Link to="third_page" smooth={true} duration={1000}>Projects</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

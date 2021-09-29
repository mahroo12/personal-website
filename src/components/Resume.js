import React from 'react'

function Resume() {
    return (
        <div >
            <div className="resume-wrapper">
                <div className="text-intro" style={{paddingTop: '200px', paddingLeft: '160px'}}>
                    <h1 style={{fontSize: '55px', fontWeight: 'bolder', letterSpacing: '3px'}}>Resume</h1>
                </div>

                <div className="education-wrapper" style={{paddingTop: '250px', paddingLeft: '160px'}}>
                    <h1 style={{fontSize: '40px', fontWeight: 'bold', letterSpacing: '1px'}}>Education</h1>
                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="mcgill-logo">
                            <img src={require('./mcgill.png').default} alt="mcgill" 
                                height={250} width={320} 
                                style={{marginLeft: '50px', marginTop: '130px'}}></img>
                        </div>
                        <div className="education-desc" style={{marginRight: '300px', marginTop: '235px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>McGill University</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Bachelor of Software Engineering | 2022</p>
                        </div>
                    </div>

                </div>

                <div className="experience-wrapper" style={{paddingTop: '100px', paddingLeft: '160px'}}>
                    <h1 style={{fontSize: '40px', fontWeight: 'bolder'}}>Experience</h1>
                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="eus-logo">
                            <img src={require('./Eus.png').default} alt="eus" 
                                height={150} width={180} 
                                style={{marginLeft: '120px', marginTop: '170px'}}></img>
                        </div>
                        <div className="education-desc" style={{marginRight: '190px', marginTop: '220px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>Engineering Undergraduate Society of McGill</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Tech Rental Manager | July 2021 - Present</p>
                        </div>
                    </div>

                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="eus-logo">
                            <img src={require('./hack4impact.jpg').default} alt="impact" 
                                height={140} width={140} 
                                style={{marginLeft: '130px', marginTop: '160px'}}></img>
                        </div>
                        <div className="hack-desc" style={{marginRight: '380px', marginTop: '220px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>Hack For Impact</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Developer | Sep 2021 - Present</p>
                        </div>
                    </div>
                    
                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="eus-logo">
                            <img src={require('./eline.png').default} alt="eline" 
                                height={140} width={140} 
                                style={{marginLeft: '130px', marginTop: '160px'}}></img>
                        </div>
                        <div className="eline-desc" style={{marginRight: '160px', marginTop: '220px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>Engaged Learning In Engineering</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Vice President of Communications | Sep 2021 - Present</p>
                        </div>
                    </div>

                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="eus-logo">
                            <img src={require('./mrt.png').default} alt="mrt" 
                                height={150} width={180} 
                                style={{marginLeft: '130px', marginTop: '160px'}}></img>
                        </div>
                        <div className="mrt-desc" style={{marginRight: '320px', marginTop: '220px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>McGill Rocket Design Team</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Team Member | Sep 2020 - Dec 2020</p>
                        </div>
                    </div>

                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="mdu-logo">
                            <img src={require('./mdu.jpg').default} alt="mdu" 
                                height={150} width={190} 
                                style={{marginLeft: '100px', marginTop: '190px'}}></img>
                        </div>
                        <div className="mdu-desc" style={{marginRight: '360px', marginTop: '262px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>McGill Debating Union</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Debater | Sep 2018 - Sept 2020</p>
                        </div>
                    </div>

                    <div className="logo-and-description" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="spreeha-logo">
                            <img src={require('./spreeha.png').default} alt="spreeha" 
                                height={150} width={180} 
                                style={{marginLeft: '100px', marginTop: '160px'}}></img>
                        </div>
                        <div className="mrt-desc" style={{marginRight: '180px', marginTop: '232px'}}>
                            <p style={{fontSize: '22px', fontWeight: 'bold'}}>Spreeha Bangladesh</p>
                            <p style={{fontSize: '20px', fontWeight: 'lighter', paddingTop: '4px', color: '#bdbbbb'}}>Software Engineering Intern | July 2019 - Aug 2019</p>
                        </div>
                    </div>

                </div>
            
            </div>

            <div className="footer" style={{backgroundColor: "#0F1624", height: "10vh", marginTop: '50px', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{marginLeft: '100px', marginTop: '10px', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                <img src={require('./email.png').default} alt="git" style={{marginTop: '8px'}}></img>
                </div>
                <div style={{marginTop: '15px'}}>
                <p style={{color: 'white', marginLeft: '7px'}}>mahroo.rahman@mail.mcgill.ca</p>
                </div>
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                <img src={require('./inkedin.png').default} alt="git" height={28} width={40} style={{marginTop: '20px', paddingRight: '10px'}}></img>
                </div>
                <div style={{marginTop: '28px', marginRight: '20px'}}>
                <a  href='https://www.linkedin.com/in/mahroo-rahman/' target="_blank" rel="noreferrer" style={{color: 'white'}}>Linkedin</a>
                </div>
                </div>

                <div style={{marginRight: '100px', marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                <img src={require('./github.png').default} alt="git"  style={{paddingRight: '10px'}}></img>  
                </div>
                <div style={{marginTop: '7px'}}>
                <a style={{color: 'white'}} href='https://github.com/mahroo12' target="_blank" rel="noreferrer">GitHub</a>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Resume

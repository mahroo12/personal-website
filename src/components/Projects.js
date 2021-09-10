import React from 'react'

function Projects() {
    return (
        <div style={{backgroundColor: "#0F1624", height: "200vh"}}>
            <div className="project-wrapper" >
                <div className="name">
                    <h1 style={{letterSpacing: '3px', color: "white", paddingTop: '40px', paddingLeft: '165px'}}>Projects</h1>
                </div>
                <div className="row-wrapper" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="project-crad" style={{
                                boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
                                height: '80vh',
                                width: '40vh',
                                marginTop: '50px',
                                marginLeft: '170px'}}>
                        <div className="card-pic">
                            <img src={require('./diabetes.jpg').default} alt="capstone" 
                                height={80} width={160} 
                                style={{marginLeft: '35px', marginTop: '20px'}}></img>
                        </div>
                        <div className="description">
                            <h3 style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>EuGlide</h3>
                        </div>
                        <div className="tech">
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>
                            Currently, working in a team of 3 for my final year design project 
                            to build a web and android application for McGill Artificial Pancreas Lab
                            to store data from local system to a website and authenticate the EuGlide app.</p>
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>
                                Technologies used: Firebase, Realm, React, HTML, CSS, Node.Js, Kotlin</p>
                        </div>
                        
                    </div>

                    <div className="project-crad" style={{
                            boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
                            height: '80vh',
                            width: '40vh',
                            marginTop: '50px'}}>
                        <div className="card-pic">
                            <img src={require('./dpm.jpg').default} alt="robot" 
                                height={80} width={160} 
                                style={{marginLeft: '35px', marginTop: '20px'}}></img>
                        </div>
                        <div className="description">
                            <h3 style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>Autonomous Robot</h3>
                        </div>
                        <div className="tech">
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>In a group of 6 members, we worked on designing 
                            and constructing a machine that can autonomously 
                            navigate a closed course and rescue a stranded vehicle. 
                            I have programmed several tasks such as Odometry, 
                            navigation and Localisation of an EV3 robot in Java.</p>
                        </div>
                        
                    </div>

                    <div className="project-crad" style={{
                            boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
                            height: '80vh',
                            width: '40vh',
                            marginTop: '50px',
                            marginRight: '170px'}}>
                        <div className="card-pic">
                            <img src={require('./tutor.jpg').default} alt="edvantage" 
                                height={80} width={160} 
                                style={{marginLeft: '35px', marginTop: '20px'}}></img>
                        </div>
                        <div className="description">
                            <h3 style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>EDvantage</h3>
                        </div>
                        <div className="tech">
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>Implemented a tutoring service website and an android app 
                                            in a group of 5 members in an agile environment for
                                            tutors to post their schedule, receive/send feedback from/to students 
                                            and book rooms for classes</p>
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px', marginTop: '15px'}}>Technologies used: Java, Vue.Js, PostgresSql, Heroku,
                                                        Junit tests, TravisCI, Gradle</p>
                        </div>
                        <div className="card-button">
                            <button style={{
                                color: '#FFF',
                                background: '#c73e3e',
                                border: '1px solid rgba(255, 255, 255, 0.33)',
                                boxSizing: 'border-box',
                                borderRadius: '999px',
                                padding: '8px 18px',
                                fontWeight: '600',
                                fontSize: '14px',
                                letterSpacing: '2px',
                                lineHeight: '16px',
                                width: 'fit-content',
                                marginTop: '20px',
                                marginLeft: '70px',
                                
                                cursor: 'pointer',
                                transition: '0.4s ease',
                            }}>code</button>
                        </div>
                    </div>
                </div>

                <div className="row-wrapper" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="project-crad" style={{
                                boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
                                height: '80vh',
                                width: '40vh',
                                marginTop: '50px',
                                marginLeft: '170px'}}>
                        <div className="card-pic">
                            <img src={require('./tech.PNG').default} alt="tech" 
                                height={80} width={160} 
                                style={{marginLeft: '35px', marginTop: '20px'}}></img>
                        </div>
                        <div className="description">
                            <h3 style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>Tech Rental Website</h3>
                        </div>
                        <div className="tech">
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px', marginRight: '25px', marginTop: '15px'}}>Implemented a rental website for Undergraduate Society of
                             Mcgill so that students can book laptops for renting </p>
                             <p style={{fontSize: '15px', color: 'white', marginLeft: '25px', marginTop: '15px'}}>Technologies used: HTML, CSS, React, Express, MongoDB, Node.Js</p>
                             

                        </div>
                        <div className="card-button">
                            <button style={{
                                color: '#FFF',
                                background: '#c73e3e',
                                border: '1px solid rgba(255, 255, 255, 0.33)',
                                boxSizing: 'border-box',
                                borderRadius: '999px',
                                padding: '8px 18px',
                                fontWeight: '600',
                                fontSize: '14px',
                                letterSpacing: '2px',
                                lineHeight: '16px',
                                width: 'fit-content',
                                marginTop: '40px',
                                marginLeft: '70px',
                                
                                cursor: 'pointer',
                                transition: '0.4s ease',
                            }}>code</button>
                        </div>
                    </div>

                    <div className="project-crad" style={{
                            boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
                            height: '80vh',
                            width: '40vh',
                            marginTop: '50px'}}>
                        <div className="card-pic">
                            <img src={require('./oddit.jpg').default} alt="oddit" 
                                height={80} width={160} 
                                style={{marginLeft: '35px', marginTop: '20px'}}></img>
                        </div>
                        <div className="description">
                            <h3 style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>Oddit</h3>
                        </div>
                        <div className="tech">
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>
                            Implemented a budgeting Web Application for use by treasurers of SSMU clubs 
                            in a team of 9. This application allows its users to generate an audit adhering 
                            to SSMU guidelines with corresponding list of receipts, and an annual budget 
                            comparing expected and actual revenues/expenditures.</p>
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>Technologies used: Django, React, HTML, CSS, TravisCI </p>
                        </div>
                        
                    </div>

                    <div className="project-crad" style={{
                            boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
                            height: '80vh',
                            width: '40vh',
                            marginTop: '50px',
                            marginRight: '170px'}}>
                        <div className="card-pic">
                            <img src={require('./quoridor.PNG').default} alt="quoridor" 
                                height={80} width={160} 
                                style={{marginLeft: '35px', marginTop: '20px'}}></img>
                        </div>
                        <div className="description">
                            <h3 style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>Quoridor</h3>
                        </div>
                        <div className="tech">
                            <p style={{fontSize: '15px', color: 'white', marginLeft: '25px',marginRight: '25px', marginTop: '15px'}}>Implemented a Quoridor game in Java in a group of 5 members using the Model View 
                            Controller architecture and Java Swing for the UI.Used UML Class and State Machine diagrams for modelling and 
                            Cucumber for mapping Gherkin scenarios of the features of the game.
                            </p>
                        </div>
                        
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Projects

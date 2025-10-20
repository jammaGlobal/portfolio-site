import "./intro.scss"

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="container">
                <div className="intro-section">
                    <h2>bio</h2>
                    <div className="blurb">
                        <p>
                        <br></br>
                        <span>I am a mid level full stack developer looking to expand my skills and contribute efforts to fulfilling projects.</span>
                        <br></br>

                        </p>                
                    </div>

                    <div className="innerContainer">
                        <div className="column">
                            <div className="pContainer">
                            <p>
                                <div className="break">
                                    <br></br>
                                    <br></br>
                                </div>
                                
                                I possess 4 years of professional experience in Software Engineering in which I have gained an understanding of design patterns and the software development lifecycle working on new and legacy software applications, implementing service oriented architecture, in-house libraries/middleware, APIs, maintaining CI/CD pipelines and configuring various cloud resources/networking services, building UI/UX designed frontends, and acting in DBA and application support roles. 
                                <br></br>
                                <br></br>
                                Working in several cross-functional team structures, including Agile/Scrum environments, has taught me the value of visibility, knowledge-sharing, documentation, communication with the immediate team and at times with the entire development/management cohort.
                            </p>
                            </div>
                        </div>
                        <div className="column">
                            <p className="imageBreak">
                                <br></br>
                                <br></br>
                            </p>
                            <div className="imgContainer">
                                <img src="/portfolio-site/assets/me.jpg" alt="intro" className="image" />
                                {/*<span className="caption">Location : Sunnybank. As you can see, wherever I travel to I always carry the city on my back.</span>*/}
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
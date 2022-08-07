import "./intro.scss"

export default function Intro(){
    return(
        <div className="intro" id="intro">
            <div className="container">
                <div className="intro-section">
                    <h2>the bio</h2>
                    <div className="blurb">
                        <p>
                        <br></br>
                        <span>I am a junior full stack developer looking to expand my skills and contribute efforts to fulfilling projects.</span>
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
                                
                                In the past year I have gained commercial full stack experience working on software projects using the Spring Boot framework, React, SCSS, JanusGraph/Apache Gremlin, SQL, Jenkins for CI/CD, and BitBucket for code colloboration.
                                During my bachelor of computer science at Univesity of Newcastle (grad. Dec 2020) I attained formal knowledge of data structures, 
                                algorithms, scheduling and memory management, object orientated programming, SQL database formation and management through toy programs and studying computer science theory.
                                I have also maintained self-learning efforts with projects that utilise Kotlin and React Native. 
                                <br></br>
                                <br></br>
                                My soft skills in team coordination have been cultivated in the last year through Agile/Scrum practices via communication platforms Jira, Confluence and Microsoft Teams.
                                The activities and ceremonies of scrums, sprints, sprint retrospectives, backlog refinements, have taught me the value of visibility, subtasking, ability to communicate 
                                with the entire devevlopment team, and comprehensive documentation, in the classical sense as well as with authoring and commenting on tasks to provide scope and context for present and future reading.
                            </p>
                            </div>
                       
                        </div>
                        <div className="column">
                            <p className="imageBreak">
                                <br></br>
                                <br></br>
                            </p>
                            <div className="imgContainer">
                                <img src="./portfolio-site/assets/me.jpg" alt="intro" className="image" />
                                {/*<span className="caption">Location : Sunnybank. As you can see, wherever I travel to I always carry the city on my back.</span>*/}
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
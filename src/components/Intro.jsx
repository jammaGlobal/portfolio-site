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
                        <span>I am a <b>BCompSci Graduate (Dec 2020)</b> looking to enter the economic sphere as a developer.</span>
                        <br></br>

                        </p>                
                    </div>

                    <div className="innerContainer">
                        <div className="column">
                            <div className="pContainer">
                            <p>
                                <br></br>
                                <br></br>
                                Having ready-to-hand knowledge and experience in Java, Javascript (NodeJS, Express, React), C#, C++, Python, HTML, CSS, SQL database formation and management through university and self-learning projects, in addition to a formal knowledge of data structures, algorithms, scheduling and memory management, and object orientated programming acquired in my time in university creating a host of terminal toy programs and studying computer science theory, I feel I could be a great addition to your software development team.
                                <br></br>
                                <br></br>
                                My soft skills in team coordination have been cultivated through group projects in courses dealing with software quality,
                                system analysis/design, and UI/UX, which required the use of git version control, communication platforms like Slack and
                                Notion, and participation in Agile software development methodology. When it comes to QA experience I have contributed
                                to design and testing documentation and used JUnit for testing in projects. Further cultivation has occurred during my
                                years of volunteering work in Marine Rescue, which required dealing with divergent perspectives amongst members not
                                of contemporary organisation cultures, and came with critical responsibilities especially during rescues dealing with other
                                emergency services.
                            </p>
                            </div>
                       
                        </div>
                        <div className="column">
                            <p>
                                <br></br>
                                <br></br>
                            </p>
                            <div className="imgContainer">
                                <img src="portfolio-site/assets/me.jpg" alt="intro" />
                                <span className="caption">Location : Sunnybank. As you can see, wherever I travel to I always carry the city on my back.</span>
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
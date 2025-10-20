import "./navbar.scss"

export default function NavBar(){
    return(
        <div className="navbar" id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        
                        jamey <span id="black">black</span>man
                    </a>
                </div>
                <div className="right">
                    {/*<div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>*/}
                    <a href="#projects" className="projectsIndex"> projects</a>
                    <a href="#blog" className="blogIndex"> blog</a>
                </div>
            </div>
        </div>
    )
}
import "./contact.scss"

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="container">
                <div className="contact-section">
                    <h2>contact</h2>

                    <div className="contents">
                            <div className="blurb-container">
                                <span className="contact-blurb">If you are an employer and looking to hire, or have any questions I would be happy to respond via a face to face interview, phone, email or message via linkedin. </span>
                            </div>
                            <a className="email-link" href="mailto:jamey.blackman@gmail.com">
                                <h1>jamey.blackman@gmail.com</h1>
                            </a>
                            <div className="social-media">
                                <a className="linkedin" href="https://www.linkedin.com/in/jamey-blackman-2a12761a2/" target="_blank">
                                    <img src="/portfolio-site/assets/linkedin.svg" alt="" className="linkedinImage"/>
                                </a>
                                <a className="github" href="https://github.com/jammaGlobal" target="_blank">
                                    <img src="/portfolio-site/assets/github.svg" alt="" />
                                </a>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
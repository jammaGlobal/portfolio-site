import "./projects.scss"
import {
    featuredProjects,
} from "../data";
import Card from "./Card"
import Fade from "react-reveal/Fade"
import { useEffect, useState } from "react";

export default function Projects(){

    return(
        <div className="projects" id="projects">
            <div className="container">
                <div className="projects-section">
                    <div className="headerContainer">
                        <h2>past uni/self learning projects (2020-2021)</h2>
                    </div>

                    

                    <div className="gridSection">

                        <div className="grid">
                                {featuredProjects.map((project, index) => (
                                    <div className="wrapper" >
                                        <Card key={index}
                                        
                                        heading={project.title}
                                        paragraph={project.para}
                                        imgUrl ={project.img}
                                        projectLink={project.link}

                                        ></Card>
                                    </div>
                                    

                                ))}
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}
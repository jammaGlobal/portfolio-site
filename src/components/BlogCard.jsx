import React from "react"
import "./blogcard.scss"

const BlogCard = ({ heading, paragraph, imgUrl, projectLink, date }) => {
  return (
    <div
      className="blogcard"
      style={{
        backgroundImage:
          "url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="overlay">
        <div className="content">
          <h3 className="date">{date}</h3>
          <h3 className="header">{heading}</h3>
          <hr></hr>
          <div className="textContainer">
            <span className="text">{paragraph}</span>
          </div>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <img src="assets/enter.jpg" alt="enter" className="enter"/>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default BlogCard
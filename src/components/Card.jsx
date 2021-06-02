import React from "react"
import "./card.scss"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="overlay">
        <div className="content">
          <h3 className="header">{heading}</h3>
          <div className="textContainer">
            <span className="text">{paragraph}</span>
          </div>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Card
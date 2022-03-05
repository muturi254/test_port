import React from "react"
import "./Intro.css"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Peter Muturi</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Photographer</div>
                            <div className="intro-title-item">UX/UI Designer</div>
                            <div className="intro-title-item">Technical Writer</div>
                            <div className="intro-title-item">Technical Lead</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores
                    </div>
                </div>
            </div>
            <div className="intro-right">Right</div>
        </div>
    )
}

export default Intro
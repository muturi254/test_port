import React from "react";
import "./about.css";
import Award from "../../images/award.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src="https://images.pexels.com/photos/10998586/pexels-photo-10998586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  className="about-image"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">It is a long established fact that a reader will be destracted by readable content.</p>
                <p className="about-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur veritatis cumque sint unde quidem labore, natus molestiae officiis voluptate, consectetur id, delectus libero quibusdam vel molestias. Est a repudiandae autem?
                </p>
                <div className="about-award">
                    <img src={Award} alt="" className="about-award-img" />
                    <div className="about-award-texts">
                        <h4 className="about-award-title">Information Design</h4>
                        <p className="about-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti iste consequuntur cum maxime nam!
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}


export default About;
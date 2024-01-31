import React from 'react';
import aboutPic from '../assets/about-pic.png';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';

const AboutSection = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src={aboutPic} alt="Profile picture" className="about-pic" />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src={experienceIcon} alt="Experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>non years <br />in nothing</p>
                        </div>
                        <div className="details-container">
                            <img src={educationIcon} alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>B.Sc. Business Administrations<br />B.Sc. Computer Science</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>Hi, I'm Marteinn Lundi Kjartansson, a Computer Science and Business Administration sophomore at Reykjavík
                            University. Passionate about cybersecurity, data management, and analysis, I thrive in blending tech with
                            business strategy.</p>
                        <p>Outside of tech and academics, I enjoy exploring nature, indulging in video games, reading, and sports.
                            Raised in Reyðarfjörður, Iceland, I have a deep appreciation for nature and a love for animals. I also
                            have a penchant for traveling and experiencing diverse cultures, thanks to my involvement in an
                            international student exchange program.</p>
                        <p>At 22, my life is a mix of coding, strategy, and diverse hobbies, all fueling my passion for learning and
                            connecting with people globally. I'm always eager to engage in new collaborations and explore innovative
                            ideas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

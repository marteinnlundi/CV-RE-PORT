import React from 'react';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';


const ProfileSection = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={profilePic} alt="Marteinn profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Marteinn Lundi</h1>
                <p className="section__text__p2">Comp sci student or some</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={() => window.open('./assets/resume.pdf')}>
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img src={linkedinIcon} alt="My LinkedIn profile" className="icon"
                        onClick={() => window.location.href = 'https://linkedin.com/marteinn-lundi-kjartansson'} />
                    <img src={githubIcon} alt="My Github profile" className="icon"
                        onClick={() => window.location.href = 'https://github.com/marteinnlundi'} />
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;

import React from 'react';
import checkmarkIcon from '../assets/checkmark.png';

const ExperienceSection = () => {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {/* Frontend Development */}
                    <div className="details-container">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>HTML</h3>
                                    <p>Competent</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Proficient</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>React</h3>
                                    <p>Proficient</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>CSS</h3>
                                    <p>Competent</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Backend and Other Skills */}
                    <div className="details-container">
                        <h2 className="experience-sub-title">Backend and Other Skills</h2>
                        <div className="article-container">
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>SQL</h3>
                                    <p>Confident</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Python</h3>
                                    <p>Advanced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Java</h3>
                                    <p>Proficient</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>C</h3>
                                    <p>Beginner</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Node.js</h3>
                                    <p>Proficient</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Git</h3>
                                    <p>Advanced</p>
                                </div>
                            </article>
                            <article>
                                <img src={checkmarkIcon} alt="Experience icon" className="icon" />
                                <div>
                                    <h3>Postgres</h3>
                                    <p>Proficient</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;

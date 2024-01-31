import React from 'react';
import projectImage1 from '../assets/default.png';
import arrowIcon from '../assets/arrow.png';

const ProjectSection = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {/* Project 1 */}
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src={projectImage1} alt="Project 1" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Business Proess Automation System</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="right-align details-container">
                        <div className="article-container">
                            <img src={projectImage1} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Market Analysis Tool</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="right-align details-container">
                        <div className="article-container">
                            <img src={projectImage1} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Financial Forecating Model</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 4 */}
                    <div className="right-align details-container">
                        <div className="article-container">
                            <img src={projectImage1} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Coustomer Feedback Analysis System</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 5 */}
                    <div className="right-align details-container">
                        <div className="article-container">
                            <img src={projectImage1} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Business Intelligence Dashboard</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    {/* Project 6 */}
                    <div className="right-align details-container">
                        <div className="article-container">
                            <img src={projectImage1} alt="Project 2" className="project-img" />
                        </div>
                        <h2 className="experience-sub-title project-title">Something API or Cyper attack</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/marteinnlundi'}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrowIcon} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
        </section>
    );
};

export default ProjectSection;

import React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import ProfileSection from './components/ProfileSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';

const App = () => {
  return (
    <div>
      <NavBar />
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />

    </div>
  );
};

export default App;

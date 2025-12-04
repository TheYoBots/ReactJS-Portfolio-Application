import React from 'react';
import './style.css';

function App() {
  // siteProps object containing organization and personal information
  const siteProps = {
    name: "Yohaan Nathan",
    title: "Software Developer",
    organization: "XYZ Project",
    email: "jaya@xyzproject.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "A passionate software developer specializing in ReactJS applications.",
    backgroundImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=800&fit=crop"
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">{siteProps.name}</h1>
          <p className="hero-title">{siteProps.title}</p>
        </div>
        <div className="hero-image"></div>
      </section>
    </div>
  );
}

export default App;

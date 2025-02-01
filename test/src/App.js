import './App.css';
import { useState, useEffect } from 'react';
import moi from './moi.jpg';
import gamut from './vm.png';
import top from './top.png';
import setting from './setting.png';
import pp from './humaib.png';
import Test from './Test';

const projects = [
  {
    id: 1,
    title: 'Setting-Up',
    description: 'Trouver le premier plus grand carré de points, dans un pattern aléatoire, avec une map de taille aléatoire',
    details: 'Voici les détails complets du projet A.',
    image: setting,
  },
  {
    id: 2,
    title: 'Gamut',
    description: 'Créer une VM en dualboot, avec ArchLinux et ParrotOS, puis sur une autre VM, un serveur SSH sur Debian',
    details: 'Voir plus de détails',
    image: gamut,
  },
  {
    id: 3,
    title: 'My-Top',
    description: 'Reproduction de la commande système Linux "top" grâce à la ncurses',
    details: 'Voici les détails complets du projet C.',
    image: top,
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };
  const handleCloseDetails = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacity = 0.8;
      const opacity = Math.min(scrollTop / 300, maxOpacity);
      setNavbarOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container">
      <div className="background">
        <div className="centered-text">
          <h1>Lamour Sacha</h1>
          <p>Développeur - Étudiant EPITECH</p>
        </div>
      </div>
      <nav className="navbar" style={{ backgroundColor: `rgba(36, 42, 48, ${navbarOpacity})` }}>
        <div className="profile">
          <img src={moi} alt="Lamour Sacha" className="profile-pic" />
        </div>
        <div className="nav-links">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="about-section">
  <h2 className="about-title">Qui suis-je ?</h2>
  <div className="about-content">
    <img src={pp} alt="Lamour Sacha" className="about-image" />
    <div className="about-text-box">
      <Test />
      <p>
        <strong>Hello !</strong> Je m’appelle <strong>Lamour Sacha</strong>, étudiant en première année à <strong>Epitech Moulins</strong>.
      </p>
      <p>
        Passionné d’informatique et de jeux vidéo, j’ai suivi un bac général avec les spécialités Mathématiques et NSI, 
        ce qui m’a permis d’acquérir une solide base en algorithmie et en programmation.
      </p>
      <p>
        Curieux et enthousiaste face aux nouvelles technologies, j’ai décidé de me lancer dans un projet ambitieux : 
        la création de mon propre portfolio.
      </p>
      <p>
        À travers ce projet, je souhaite mettre en avant mes compétences, mes expériences et partager mon évolution 
        dans le monde du développement. C’est une aventure motivante que j’ai hâte de concrétiser !
      </p>
    </div>
    </div>
    </div>
    <div className="background-second">
      <div className="project-container">
        <div className="card-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <img src={project.image} alt={project.title} className="card-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="project-details">
            <div className="details-container">
              <button className="close-btn" onClick={handleCloseDetails}>X</button>
              <h2>{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="details-image" />
              <p>{selectedProject.details}</p>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
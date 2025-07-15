import React from 'react';
import { repos } from './data';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div>
      <nav>
        <a href="#repos">Repositories</a>
        <a href="#contacto">Contact</a>
      </nav>
      
     <header className="perfil">
  <img src="/perfil.jpeg" alt="Roberto Plancarte" className="foto-perfil" />
  <div className="info-personal">
    <h2>Roberto Jesus Perez Plancarte</h2>
    <p><strong>Experience:</strong> I am a highly motivated and results-oriented Software Engineer with a strong foundation in computer systems engineering and hands-on experience in web and mobile application development. I specialize in front-end development and full-cycle software solutions, combining technical proficiency with a continuous learning mindset.
</p>
    <p><strong>Skills:</strong> KOTLIN, REACT, JAVASCRIPT, ANDROID STUDIO, HTML, CSS, SQL, GIT, JAVA, PHP.</p>
    <p><strong>Level of education:</strong> Instituto de Capacitación y Educación Profesional (ICEP) COMPUTATIONAL SYSTEMS ENGINEER </p>
  </div>
</header>

      <h1 id="repos">📁 My Repositories</h1>

      <div className="repo-list">
        {repos.map((repo, index) => (
          <motion.div className="repo" key={index} whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <img src={repo.image} alt={repo.name} />
            <div className="repo-content">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      

      <div id="contacto" className="contact">
        <h2>Contact</h2>
        <p>Name: Roberto Jesus Perez Plancarte</p>
        <p>Email: perezplancarter@gmail.com</p>
        <p>Cell Phone Number: +52 452 134 1224 </p>
        <p>GitHub: <a href="https://github.com/Choilolox" target="_blank" rel="noopener noreferrer">Choilolox</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/roberto-jesus-perez-plancarte-447767374/" target="_blank" rel="noopener noreferrer">Roberto Jesus Perez Plancarte</a></p>

      </div>
    </div>
  );
};

export default App;
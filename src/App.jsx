import yoImg from './assets/yo.jpg'
import Linuxlogo from './assets/Linux.jpeg'
import kalilinux from './assets/kalilinux.jpg'
import hydra from './assets/hydra.png'
import codedex from './assets/codedex.png'
import './App.css'
import { useState } from 'react'

function App() {
  const [section, setSection] = useState('about')

  return (
    <>
      <title>WhisKeyTreez - Portafolio</title>
      <nav>
        <div className="header">
          <div className="header-inner">
            <div className="me">
              <h5>WhisKeyTreez</h5>
              <a href="https://github.com/Whiskeytreez" target="_blank" rel="noopener noreferrer">
                <figure className="hover15">
                  <img src={yoImg} alt="Yo" />
                </figure>
              </a>
            </div>
            <div className="menu">
              <button className="menu-btn" onClick={() => setSection('about')}>Bases</button>
              <button className="menu-btn" onClick={() => setSection('projects')}>Proyectos</button>
              <button className="menu-btn" onClick={() => setSection('skills')}>Habilidades</button>
              <button className="menu-btn" onClick={() => setSection('contact')}>Contacto</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {section === 'about' && (
          <div className="content">
            <div className="aboutme">
              <h2 className='led-text'>About Me</h2>
              <p>
                Hola, me llamo Daniel, pero no me importa cómo me digan. <strong>Disfruto programar y crear sitios web.</strong>
              </p>
              <p>
                En mi tiempo libre me gusta aprender más sobre programación y organizar mis tareas y deberes. Aunque no soy experto, me gustaría mejorar mis habilidades y aprender más sobre este tema.
              </p>
              <p>
                Actualmente estudio en el colegio y quiero seguir aprendiendo sobre <span style={{color: "#a16ae8"}}>desarrollo web</span>.
              </p>
              <p>
                <span role="img" aria-label="music">🎵</span> Además de la programación, me gusta mucho la música y escuchar diferentes géneros.
              </p>
              <p>
                <span role="img" aria-label="security">🛡️</span> Me interesa la ciberseguridad, especialmente el <strong>purple team</strong>, y quiero aprender sobre defensa y ataque de sistemas informáticos.
              </p>
              <div className="about-actions">
                <a className="btn" href="mailto:mejia.vazquez.daniel.10@gmail.com">Contáctame</a>
                <br />
                <a className="btn" href="https://github.com/Whiskeytreez" target="_blank" rel="noopener noreferrer">GitHub</a>
                <br />
                <a className="btn" href="https://instagram.com/dani_.amv" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
            <div className="logos">
              <a href='https://www.linux.org/' target="_blank" rel="noopener noreferrer">
                <img src={Linuxlogo} alt="Linux Logo" />
              </a>
              <a href='https://www.kali.org/' target="_blank" rel="noopener noreferrer">
                <img src={kalilinux} alt="Kali Linux Logo" />
              </a>
              <a href='https://www.kali.org/tools/hydra/' target="_blank" rel="noopener noreferrer">
                <img src={hydra} alt="Hydra Logo" />
              </a>
              <a href='https://www.codedex.com/' target="_blank" rel="noopener noreferrer">
                <img src={codedex} alt="Codedex Logo" />
              </a>
            </div>
          </div>
        )}

        {section === 'projects' && (
          <section className="projects">
            <h2 className='led-text'>Mis Proyectos</h2>
            <div className="project-list">
              <div className="project-card">
                <h3 className='led-text'>Portafolio Personal</h3>
                <p>Este mismo portafolio hecho con React y Vite, donde muestro mis habilidades y proyectos.</p>
                <a href="https://github.com/Whiskeytreez/portafolio" target="_blank" rel="noopener noreferrer">Ver código</a>
              </div>
              <div className="project-card">
                <h3 className='led-text'>Linux Cheatsheet</h3>
                <p>Una guía rápida de comandos de Linux para principiantes, hecha en HTML y CSS.</p>
                <a href="https://github.com/Whiskeytreez/linux-cheatsheet" target="_blank" rel="noopener noreferrer">Ver código</a>
              </div>
              <div className="project-card">
                <h3 className='led-text'>Calculadora</h3>
                <p>Un pequeño proyecto de calculadora hecho con JavaScript</p>
                <a href="https://github.com/Whiskeytreez/calculadora" target="_blank" rel="noopener noreferrer">Ver código</a>
              </div>
            </div>
          </section>
        )}

        {section === 'skills' && (
          <section className="skills">
            <h2 className='led-text'>Habilidades</h2>
            <ul>
              <li>HTML, CSS y JavaScript</li>
              <li>React y Vite</li>
              <li>Linux básico y comandos de terminal</li>
              <li>Git y GitHub</li>
              <li>Curiosidad por la ciberseguridad (purple team)</li>
              <li>Organización y aprendizaje autodidacta</li>
            </ul>
          </section>
        )}

        {section === 'contact' && (
          <section className="contact">
            <h2 className='led-text'>Contacto</h2>
            <p className='led-text-soft'>Puedes escribirme por correo o en mis redes sociales:</p>
            <ul>
              <li>
                <a href="mailto:mejia.vazquez.daniel.10@gmail.com">Correo electronico</a>
              </li>
              <li>
                <a href="https://instagram.com/dani_.amv" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://github.com/Whiskeytreez" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>
            <p>O descarga mi <a href="/cv.pdf" download>CV aquí</a>.</p>
          </section>
        )}
      </main>

      <footer>
        <div className="footer">
          <p>© {new Date().getFullYear()} WhisKeyTreez. Todos los derechos reservados.</p>
          <p>
            <a href="mailto:mejia.vazquez.daniel.10@gmail.com">mejia.vazquez.daniel.10@gmail.com</a>
            {" | "}
            <a href="https://github.com/Whiskeytreez" target="_blank" rel="noopener noreferrer">GitHub</a>
            {" | "}
            <a href="https://instagram.com/dani_.amv" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p>
            <a href="/cv.pdf" download>Descargar CV</a>
          </p>
          <p>“Sigue aprendiendo, sigue creciendo.”</p>
        </div>
      </footer>
    </>
  )
}

export default App
import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

// components
import Header from './components/navbar/Header'
import Banner from './components/banner/Banner'
import Title from './components/title/Title'
import ProjectTimeline from './components/project-timeline/Project-Timeline'
import Footer from './components/footer/Footer'

// pages
import About from './pages/about/About'
import Skills from "./pages/skills/Skills"
import Experience from './pages/experience/Experience'
import Conatct from './pages/contact/Contact'

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <Banner />
      <Title />
      <div className="bg-image">
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade  duration={500}>
                <About />
              </Fade >
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
      <Container className="container-box rounded">
          <Slide duration={500}>
            <hr />

            <Experience />
          </Slide>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Conatct />
        </Fade>
      </Container>
      <hr />
      <Footer />
    </div>
  );
}

export default App;

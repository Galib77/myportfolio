import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";

// components
import Header from './components/navbar/Header'
import Banner from './components/banner/Banner'
import Title from './components/title/Title'
import ProjectTimeline from './components/project-timeline/Project-Timeline'

// pages
import About from './pages/about/About'
import Skills from "./pages/skills/Skills";
import Experience from './pages/experience/Experience'

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
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
              <Slide duration={500}>
                <About />
              </Slide>
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
    </div>
  );
}

export default App;

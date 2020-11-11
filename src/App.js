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

// pages
import About from './pages/about/About'

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
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;

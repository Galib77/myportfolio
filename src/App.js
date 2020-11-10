import React from 'react'
import './App.css';

// components
import Header from './components/navbar/Header'
import Banner from './components/banner/Banner'
import Title from './components/title/Title'

const App = () => {
  return (
    <div className="App">
      <Header />
     <Banner />
     <Title />
    </div>
  );
}

export default App;

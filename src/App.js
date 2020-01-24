import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Greeting from './component/Greeting';
import Profile from './component/Profile';
import Footer from './component/Footer';
import Techstack from './component/Techstack';
import Project from './component/Project';
import Social from './component/Social';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <Profile />
      <Techstack />
      <Social />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

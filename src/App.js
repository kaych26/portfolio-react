import logo from './logo.svg';
import React, {Component} from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import portfolioData from './portfolioData';

class App extends Component {
  render() {
    return (
      <div className='portfolio'>
        <Header/>
        <div className='portfolio-body'>
          <Intro portfolioData={portfolioData}/>
          <About portfolioData={portfolioData}/>
          <Resume/>
          {/* <Contact/> */}
        </div>
      </div>
    )
  }
}

export default App;

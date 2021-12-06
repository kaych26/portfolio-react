import logo from './logo.svg';
import React, {Component} from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header resumeData={resumeData}/>
        <Intro resumeData={resumeData}/>
      </div>
    )
  }
}

export default App;

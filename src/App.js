import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  },
  line_linked: {
    shadow: {
      enable: true,
      color: '#3CA9D1',
      blur: 5
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/*
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;

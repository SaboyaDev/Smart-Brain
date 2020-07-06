import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '07dc345b537c49f99dda5d3782b23b43'
});

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
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    };
  }

  onInputChange = e => this.setState({ input: e.target.value });

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        `${input}`)
      .then(
        function (response) {
          const resp = response.outputs[0].data.regions[0].region_info.bounding_box;
          console.log(resp);
        },
        function (err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

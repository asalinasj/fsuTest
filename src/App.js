import React from 'react';
import './App.css';
import BannerComponent from './components/Banner/BannerComponent';
import VideoComponent from './components/Video/VideoComponent';
import FormComponent from './components/Form/FormComponent';
import AudioComponent from './components/Audio/AudioComponent';
import CarouselComponent from './components/Carousel/CarouselComponent';
import APIComponent from './components/API/APIComponent';
import CollapsibleComponent from './components/Collapsible/CollapsibleComponent';
import HeroComponent from './components/Hero/HeroComponent';
import GameComponent from './components/Game/GameComponent';
//Simple setup

function App() {
  return (
    <div className="App">
      <BannerComponent />
      <VideoComponent />
      <FormComponent />
      <AudioComponent />
      <CarouselComponent />
      <APIComponent />
      <CollapsibleComponent />
      <HeroComponent />
      <GameComponent />
    </div>
  );
}

export default App;

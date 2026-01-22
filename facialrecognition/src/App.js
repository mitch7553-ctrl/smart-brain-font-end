import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

class App extends Component {
  // constructor () {
  //   super() 
  //   this.state
  // }
  render() {
    return (
    <div className="App">
   <ParticlesBg  type="tadpole" num={200} bg={true} />
      <Navigation />
       <Logo />
         <Rank />
           <ImageLinkForm />

    
             
     { 
             /*
             <FaceRecognition />
             */}
    </div>
  );
    }
  }
  

export default App;

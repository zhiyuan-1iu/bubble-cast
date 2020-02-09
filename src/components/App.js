import React, {Component} from 'react';
import '../css/App.css';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Podcast from './podcast/Podcast';


class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Podcast />
      </div>
    );
  }

}

export default App;

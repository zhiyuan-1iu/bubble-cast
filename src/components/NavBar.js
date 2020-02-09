import React, {Component} from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
      </div>
    </BrowserRouter>

  );
}

export default NavBar;

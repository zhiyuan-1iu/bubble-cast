import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
       <div>
          <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                Our Logo
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>

                  </li>
                  <li class="nav-item">
                    <NavLink className = "nav-link"  to="/about">About</NavLink>
                  </li>
                  <li class="nav-item">
                  <NavLink className = "nav-link"  to="/about">Contact</NavLink>

                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
       </div>
    );
}

export default Navigation;

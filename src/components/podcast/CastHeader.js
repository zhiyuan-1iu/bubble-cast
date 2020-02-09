import React, {Component} from 'react';
//import { aPlay, FaPause, FaFastForward, FaFastBackward } from 'react-icons/fa';
import {PlayerIcon} from 'react-player-controls';




class CastHeader extends Component{
  render() {
    return(
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className = "row">
                <div className = "col-md-8">
                  <h4 className="card-title">a16z - Technology & the environment </h4>
                  <p className="card-text text-muted">Sonal Chokshi, Marc Andreessen & Andrew McAfee</p>
                </div>
                <div className = "col-md-4">
                  <div className = 'row'>
                    <div className = "controller col-md-6">
                      <PlayerIcon.Play width={32} height={32}  />
                      <PlayerIcon.Pause width={32} height={32}  />
                      <PlayerIcon.Previous width={32} height={32}  />
                      <PlayerIcon.Next width={32} height={32}  />
                    </div>
                    <div className="col-md-6">
                      <img src = {require('./268x0w.jpg')} className = "castpic" alt = "Podcast Pic" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CastHeader;

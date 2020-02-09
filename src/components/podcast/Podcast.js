import React, {Component} from 'react';
import CastHeader from './CastHeader';
import CastController from './CastController';
import 'react-h5-audio-player/lib/styles.css';
import Intro from './Intro'
import AudioPlayer from 'react-h5-audio-player';


class Podcast extends Component {

  // state set to the information about the Podcast
  // e.g. name, author, time, bubbles
  // passdown as props

  constructor () {
    super();
    this.state = {
      show : false,
    };

    this.checkTime = this.checkTime.bind(this);

  }

  checkTime(t){
    if (t == 10){
      this.setState({
        show : true,
      });
    }
  }

  render () {
    return (
      <div>
        <CastHeader />
        <CastController />

        <AudioPlayer
            autoPlay
            src="https://cdn.simplecast.com/audio/3f86df/3f86df7b-51c6-4101-88a2-550dba782de8/9e7f7c1a-f90f-4315-b184-25d8de0723db/2019-10-03-andrew-mcafee-v1-sm_tc.mp3"
            onPlay={e => console.log("onPlay")}
            onListen = {n => this.checkTime(parseInt(n))}
            // other props here
        />

        <Intro
          show = {this.state.show}
        />



      </div>
    );
  }
}

export default Podcast;

import React, {Component} from 'react';



class WaveForm extends Component {

  constructor (){

    super();

  }


  render(){
    return (
      <div className= "row wave">
        {this.props.bars.map(item => (
          <div className = {item} ></div>))}
      </div>
    );
  }
}

export default WaveForm;

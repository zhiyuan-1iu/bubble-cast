import  React, {Component} from 'react';

class Intro extends Component {
  render(){
    return (
      <div className = 'container' style = {{visibility : (this.props.show ? "visible" : "hidden") ,}} >
      <div className="card" style={{width : 400,}}>
        <div className = "row">
          <img className="col-md-4" src={require('./andrew.jpg')} style = {{width: "114 px", height:"167 px",}} alt="Card image" />
          <div className="card-body col-md-8">
            <p> <strong> Information</strong></p>
            <h4 className="card-title">Andrew McAfee</h4>
            <p className="card-text">Andrew Paul McAfee, a principal research scientist at MIT...</p>
            <a href="#" className="btn btn-primary"> Go to page</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Intro;

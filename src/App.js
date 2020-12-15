import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      age:10
    }
  }
  ageUP = ()=>{
    let newState = {...this.state};
    this.setState({
      age:++newState.age
    });
    // return newState;
  }
  ageDown = ()=>{
    let newState = {...this.state};
    this.setState({
      age:--newState.age
    });
  //  return newState;
  }
    render(){
      return (
      <div className="app">
        <h2>Age Increment Decrement</h2>
        <div className="container">
          <div className="age">Age:<span>{this.state.age}</span></div><br />
          <button onClick = {this.ageUP}>Age Up</button>
          <button onClick={this.ageDown}>Age Down</button>
        </div>
      </div>
    );
  }
  
}

export default App;

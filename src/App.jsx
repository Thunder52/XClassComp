import React from "react";

export default class App extends React.Component{

  constructor(){
    super();
    this.state={count:0};
  }

  Increament=()=>{
    this.setState({count:this.state.count+1});
  }
  Decreament=()=>{
    this.setState({count:this.state.count-1});
  }
  render(){
    return(
      <div>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <button onClick={this.Increament}>Increament</button>
        <button onClick={this.Decreament}>Decreament</button>
      </div>
    )
  }
}
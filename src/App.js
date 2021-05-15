import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          CheckList-Your Go to app
          <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        </header>
      </div>
    );
  }
}

//class component
class FirstComponent extends Component {
  render(){
    return(
      <div className="firstComponent">
        <header>
          Created By 
          </header>  
      </div>
    );
  }
}

// function component
function SecondComponent (){
  return(
    <div>
      <header className="secondComponent">
      ~ Vaishali Tomar
      </header>
    </div>
  );
}
export default App;


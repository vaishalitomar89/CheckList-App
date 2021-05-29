import React, { Component } from 'react';
import FirstComponent ,{SecondComponent} from './components/examples/FirstComponent';
import Counter from './components/Counter/Counter';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          CheckList-Your Go to app
          <img src={logo} className="App-logo" alt="logo" />
          <Counter></Counter>
        </header>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render(){
    return (
      <div className="learningComponent">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      </div>
    )
  }
}

//class component
// class FirstComponent extends Component {
//   render(){
//     return(
//       <div className="firstComponent">
//         <header>
//           Created By 
//           </header>  
//       </div>
//     );
//   }
// }

// function component
// function SecondComponent (){
//   return(
//     <div>
//       <header className="secondComponent">
//       ~ Vaishali Tomar
//       </header>
//     </div>
//   );
// }
export default App;


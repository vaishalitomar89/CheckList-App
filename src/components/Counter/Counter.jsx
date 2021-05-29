import React , {Component} from 'react'
import './Counter.css'

class Counter extends Component {
  
  // Define the initial state in constructor
  // state => counter 0
  constructor(){
     super();                //Before using this always call super()
     this.state = {
       counter : 0
     }
   
     // to bind the method with class 
    this.increment = this.increment.bind(this);
  }

  render(){
  return (
      <div className="counter">
          <button onClick={this.increment}>+1</button>
          <span className="count">{this.state.counter}</span>
      </div>
  )
  }

  increment(){
    // update state => counter++
   //this.state.counter++;
   this.setState ({
     counter : this.state.counter + 1
   }
   )
  }
  
}



export default Counter
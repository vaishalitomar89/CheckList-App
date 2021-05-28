import react , {Component} from 'react';

//First class component
// export default class FirstComponent extends Component {
//     render(){
//         return (
//             <div className="firstComponent">
//                 <header>
//                     Created by 
//                 </header>
//             </div>
//         );
//     }
// }

export default class FirstComponent extends Component {
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

  export class SecondComponent extends Component {
    render(){
      return(
        <div className="secondComponent">
          <header>
            ~ Vaishali Tomar 
          </header>  
        </div>
      );
    }
  }

// export class SecondComponent extends Component {
//     render(){
//         return(
//             <div className="secondComponent">
//                 <header>
//                     ~ Vaishali Tomar
//                 </header>
//             </div>   
//         );
//     }
// }
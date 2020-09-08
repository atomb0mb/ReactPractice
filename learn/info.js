import React from 'react';
import ReactDOM from 'react-dom';


//This is a stateful component
class Store extends React.Component {
    constructor(props) {
     super(props);
     this.state = { sell: 'anything' };
   }
}  
// This is a stateless componenet
// class Week extends React.Component {
//     render() {
//      return <h1>Today is {this.props.day}!</h1>;
// }


// This is a stateless child component.
// class babyYoda extends React.Component {
//     render() {
//       return <h2>I am {this.props.name}!</h2>;
//     }
// }


// This is a stateful Parent element.
//   class Yoda extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { name: 'Toyoda' };
//     }


//   //The child component is rendering information passed down from the Parent component. 
//     render() {
//       return <babyYoda name={this.state.name} />;
//     }
//   }

// Never attempt to do this.
//this.props.car = 'millennium falcon';

//Component Mount
//A React component mounts when it renders to the DOM for the first time. 
//If it’s already mounted, a component can render again if it needs to change its appearance or content.
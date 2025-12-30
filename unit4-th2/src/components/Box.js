import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bgBox: 'green'
      };
    }
  
    componentWillUnmount() {
        alert('Component box sẽ unmount!');
      }
    render() {
      return (
        <div style={{ height: 50, width: 50, backgroundColor: this.state.bgBox }}>
          <h2>Box</h2>
        </div>
      );
    }
  }
  
  export default Box;
  
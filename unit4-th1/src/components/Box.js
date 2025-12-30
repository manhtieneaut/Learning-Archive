import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bgBox: 'green'
    };
  }
  componentDidMount(){
    setTimeout(()=>{
        this.setState({
            bgBox:'grey'
        })
    },5000)
  }

  render() {
    return (
      <div>
        <h2 style={{height: '100px',width:'100px', color:'red', backgroundColor:this.state.bgBox }}>Box</h2>
      </div>
    );
  }
}

export default Box;
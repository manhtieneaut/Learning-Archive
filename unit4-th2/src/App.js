import React, { Component } from 'react';
import Box from './components/Box';
class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      isDiplay: true
    }
  }

  onRemoveBox=()=>{
    this.setState({isDiplay: false})
  }
  render() {
    return (
      <div className='container'>
        {this.state.isDiplay && <Box/>}
      <div onClick={this.onRemoveBox} >Xoá</div>

      </div>
    );
  }
}
export default App;
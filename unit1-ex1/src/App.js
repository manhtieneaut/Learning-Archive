import { useState } from 'react';
import './App.css';



function App() {
  const isUserLogin = true;

  if(isUserLogin == true){
    return(
      <h1>Hello User</h1>
      )
  }else{
    return(
      <h1>Login now</h1>
    )
  }
  
}




export default App;

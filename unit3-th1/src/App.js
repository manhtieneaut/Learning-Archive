import React from 'react';
import logo from './logo.svg';


function App() {
   return(
    <div className='container'>
        <div>Đây là hướng dẫn dùng ảnh trong react</div>
        <img src={logo} width="200" height="100" className='img' />
        <div className='require-title'> Đây là ảnh dùng require</div>
        <img src={require('./logo.svg')} className='img2' width="200" height="100" />
    </div>
   )
}


export default App;

import { useState } from 'react';
import './App.css';



function App() {
  const list =[
    {
      name: 'Nguyễn Mạnh Tiến',
      age: 21
    },
    {
      name: 'Nguyễn Huy Hoàng',
      age: 22
    },
    {
      name: 'Nguyễn Duy Anh',
      age: 23
    },
    {
      name: 'Nguyễn Hoàng Ân',
      age: 24
    }
  ];
  
 const lists =list.map((item) =>
  <li>Tên {item.name} , Tuổi {item.age} </li>
 )
  
 return(
  <ul> {lists} </ul>
 )
}




export default App;

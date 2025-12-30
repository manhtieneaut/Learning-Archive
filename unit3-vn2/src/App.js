import React  from "react";
import { useState } from "react";
import styles from "./css/App.module.css";


export default function App() {

  const [name,setName] = useState('day');

  const onNight = () =>{
    setName('night');
  }
  const onDay = () =>{
    setName('day'); 
  }

  return (
    <div className={styles.container}>
      <button className={styles.night} onClick = {onNight}>Night</button>
      <button className={styles.day} onClick = {onDay}>Day</button>
      <div style={{
        height: '200px' ,
        width: '410px', 
        backgroundColor : (name === 'day') ? 'blue' : 'black',
        marginLeft : '10px',
        marginTop : '10px'
        
        }}></div>
    </div>
  );
}
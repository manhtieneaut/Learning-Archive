import React from "react";
import styles from "./css/App.module.css"

export default function App() {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>left</div>
      <div className={styles.content}>right</div>
      
    </div>
  );
}
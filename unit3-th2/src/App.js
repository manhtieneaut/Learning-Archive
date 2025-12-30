import { useState } from "react";
import "./App.css";
//import styles from "./css/styles.module.css"
import StyledText from "./components/Style-component";

export default function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current = current + 1;
    });
  };

  //const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;(className)
  //style={{color : (numClicked % 2 ===0) ? 'red' : 'blue'}}
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <StyledText numClicked={numClicked}>
           Your clicked {numClicked} times
      </StyledText>

    </div>
  )
}

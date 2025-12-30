import React from "react";
import { useState } from "react";
import Greeting from "./Greeting";


  const UserForm = () =>{
    const [userInput, setUserInput] = useState("");
    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };

    return (
      <div>
        <input
          type="text"
          name="user"
          placeholder="Please type somthing"
          onChange={handleInputChange}
        />
       

        <Greeting name = {userInput} />
      </div>


    );
  }

  export default UserForm;
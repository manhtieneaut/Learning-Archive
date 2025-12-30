import React, { useState } from "react";

const Component = () => {
  const [name, setName] = useState('google');
  const handleClick = () => {
    setName('facebook');
  };

  return (
    <div>
      <p className={name === 'google' ? 'color-red': 'color-green'}>Xin chào các bạn</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};
export default Component;

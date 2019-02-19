import React from 'react';

const Keypad = () => {
  return (
    <input type="password" onKeyUp={() => (
      console.log('Entering password...')
    )}/>
  )
}

export default Keypad;

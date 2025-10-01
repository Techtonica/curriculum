import React, {useState} from 'react';
import ColorButton from './ColorButton';

// EXERCISE: React Buttons Pt 2: Passing Child to Parent
const App = () => {

  // Create a state and setState with a default message value

  // Update this code with a new function named "updateMessage" that will take in a message-parameter and update your setState by passing the same message-parameter; note the message-parameter is different from the message state
  const handleClick = () => {
    alert('you clicked a button')
  };

 return (
    <div>
      {/* Add a p tag with your default message state */}
      
      {/* replace your onClick with your new function and set its value with the new function name */}
      <ColorButton color="blue" onClick={handleClick}>
        Click Me!
      </ColorButton>
      <ColorButton color="green" onClick={handleClick}>
        Another Button
      </ColorButton>
    </div>
 );
};

export default App;

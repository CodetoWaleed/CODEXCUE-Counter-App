import React, { useState } from 'react';
import './CounterApp.css'; // Import CSS file for styling

function App() {
  // State variable for the counter
  const [count, setCount] = useState(0);

  // Function to handle incrementing the counter
  const increment = () => {

    setCount(count  + 1);
  };

  // Function to handle decrementing the counter
  const decrement = () => {
    setCount(count  - 1);
  };

  // Function to handle resetting the counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="title">CODEXCUE Counter App</h1>
      <div className="counter">
      <p className="count"><span class="count-number">Count: {count}</span></p>
        <div className="button-container">
        <button className="btn increment" onClick={increment}>Increment</button>
        <button className="btn decrement" onClick={decrement}>Decrement</button>
<button className="btn reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

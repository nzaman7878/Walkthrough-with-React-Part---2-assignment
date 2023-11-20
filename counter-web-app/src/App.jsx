import './App.css';
import React from "react"

// Define the main component named App
function App() {
  // Initialize state variable 'counter' with an initial value of 0
  const [counter, setCounter] = React.useState(0);

  // Return the JSX representing the component's UI
  return (
    <div id='parent'>
      {/* Display the current value of the counter */}
      <h1>{counter}</h1>
      <div>
        {/* Button to increment the counter when clicked */}
        <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
        {/* Button to decrement the counter when clicked */}
        <button onClick={() => { setCounter(counter - 1) }}>Decrement</button>
      </div>
    </div>
  );
}

// Export the App component as the default export of this module
export default App;

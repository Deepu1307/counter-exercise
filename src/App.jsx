import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  )
}

export default App

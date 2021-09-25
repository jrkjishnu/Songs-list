import { useState } from 'react';
import './App.css';

function App() {


  
  const [count,setCount] = useState(1);

  const increment = ()=>
  {
    if(count === 6)
      setCount(1)
    else
      setCount(count+1)
  }
  const decrement = ()=>
  {
    if(count === 1)
      setCount(6)
    else
      setCount(count-1)
  }
  return (
    <div className="App">
      <img src={`img${count}.jpg`} alt="abc" width='300px' height='300px'/>
      <h1>{count}</h1>
      <button onClick={increment}>Next</button>
      <button onClick={decrement} style={{marginLeft:'130px'}}>Previous</button>
    </div>
  );
}

export default App;

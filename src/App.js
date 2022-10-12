
import React, {useState} from 'react';
import './App.css';

function App() {
  const [contador,setContador] = useState(10)
  
  const increment = () => {
    setContador(contador + 1)
    console.log(contador)
  }
  const decrement = () => {
    setContador(contador - 1)
    console.log(contador)
  }
  const clear =()=> {
    setContador(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        Contador: {contador}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>clear</button>
      </header>
    </div>
  );
}

export default App;

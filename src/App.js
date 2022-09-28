import React from "react";
import '../src/App.css'

function App() {
  const [counter, setCounter] = React.useState(0);
    
  const incCounter = () => {
    if (counter < + 50) {
        setCounter(counter + 1);
      }
    } 
     
  const decCounter = () => {
    if (counter > -50) {
        setCounter(counter - 1);
      }
    } 
    
    const rndCounter = () => {
      setCounter (+(Math.random() * (50 - -50) + -50).toFixed(0))
    }
    
     const resetCounter = () => {
        setCounter(0)
       } 

      return (
        <div class="app">
          <div class="counter">{counter}</div>
          <div class="controls">
            <button onClick={incCounter}>INC</button>
            <button onClick={decCounter}>DEC</button>
            <button onClick={rndCounter}>RND</button>
            <button  onClick={resetCounter}>RESET</button>
          </div>
        </div>
      )
    }
  export default App;
 
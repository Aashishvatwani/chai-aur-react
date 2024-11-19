import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    console.log("Value added",Math.random());
    setCounter(counter+1);
  }
  const removeValue=()=>{
    setCounter(counter-1);
  
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>COunter value :{counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove Value {counter}</button>
    </>
  )
}

export default App

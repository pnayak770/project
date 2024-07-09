import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  
  const addValue =()=>{
    if(counter>=20){
      counter=counter-1;
      
    }
    else{

      counter=counter+1;
      setCounter(counter);
    }
  }

  const remove=()=>{
    if(counter<=0){
      counter=0;
    }
    else{

      counter=counter-1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h2>counter : {counter}</h2>
      <button onClick={addValue}>increse</button>
      <button onClick={remove}>decrese</button>
    </>
  )
}

export default App

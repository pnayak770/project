
import React from 'react';
import { Card } from './Card'
import './App.css'

function App() {
  let arr={
    name:"pintu",
    surname:"nayak",
  };

  return (
    <>
      <Card arr={arr}/>
    </>
  )
}

export default App

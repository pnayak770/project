import { useState } from 'react'

import './App.css'

function App() {

  const [AllTodo,setAllTodo]=useState([]);
  const [todo,setTodo]=useState("");

  
  const onchange=(e)=>{
    setTodo(e.target.value)
  }

  const onclick=()=>{
    setAllTodo([...AllTodo,todo])
    setTodo("")
  }

  return (
    <>
      <div>
        <input type="text" placeholder='addTodo' value={todo}
        onChange={
          onchange
        }/>
        <button
        onClick={onclick}
        >Add</button>
      </div>
      <div>
       <ol>
       
       { AllTodo.map((todo,idx)=>(
         <li key={idx}>{todo}</li>
        ))}
       </ol>
      </div>
    </>
  )
}

export default App

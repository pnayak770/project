import { useState } from "react";
import "./App.css";


function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
     <div className="main" style={{backgroundColor:color}}>
      <p>hello</p>

     </div>
     <div className="child ">
      <button
      onClick={()=>setColor("red")}
      style={{backgroundColor:"red"}}
      >red</button>

      <button
      onClick={()=>setColor("blue")}
      style={{backgroundColor:"blue"}}
      >blue</button>

     <button
      onClick={()=>setColor("pink")}
      style={{backgroundColor:"pink"}}
      >pink</button>
     </div>

    </>
  )
}

export default App

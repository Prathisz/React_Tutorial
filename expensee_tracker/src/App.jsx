import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
let newCount=0;
  const setNewCount=()=>{
    console.log(newCount);
    newCount+=1};


    useEffect(()=>{
      console.log("print",count);
    },[count])

  return (
    <>
     
        <h1>helloii</h1>
          <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={setNewCount}>newCount is here{newCount}</button>
      </div>
    </>
  )
}

export default App

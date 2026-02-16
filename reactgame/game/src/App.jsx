import { useState } from 'react'
import './App.css'

function App() {
  let point = 0;

  const handleClick = (e)=>{
    const box = e.target;
    point++;

    let sc = document.querySelector("#score");
    sc.textContent= `Score :  ${point}`;
  }
  

  return (
    <>
  <div className="game">
            <div id="score" className="score">
              Score: 0
            </div>

            <div
              onClick={handleClick}
              className="box"
              style={{ left: "100px", top: "100px" }}
            ></div>
          </div>
    </>
  )
}

export default App



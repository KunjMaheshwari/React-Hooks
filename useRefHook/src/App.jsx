import React, {useState, useEffect, useRef} from 'react';


function App(){

  // const [value, setValue] = useState(0);
  // // const [count, setCount] = useState(0);

  // // useEffect(() =>{
  // //   setCount(count => count+1);
  // // }, [value]);

  // const count = useRef(0);

  // useEffect(() =>{
  //   count.current = count.current+1;
  // }, [value]);

  // return (
  //   <>
  //   <button onClick = {() => {setValue(prev => prev-1)}}>-1</button>
  //   <h1>{value}</h1>
  //   <button onClick = {() => {setValue(prev => prev+1)}}>+1</button>

  //   <h1>Render Count: {count.current}</h1>
  //   </>
  //)

  const inputElem = useRef();

  const btnClicked= () =>{
    inputElem.current.style.background = "blue";
  }

  return (
    <>
      <input type="text" ref={inputElem}/>
      <button onClick = {btnClicked}>click here</button>
    </>
  )
}


export default App;
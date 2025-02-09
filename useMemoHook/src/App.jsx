import React, {useState, useMemo} from 'react';

function App(){
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num){
    console.log("Calculation done");
    return Math.round(Math.pow(num, 3));
  }

  // const result = cubeNum(number);

  const result = useMemo(() => {return cubeNum(number)}, [number]);
  return (
    <>
    <input type="number" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
    <h1>Cube of the number: {result}</h1>

    <button onClick={() =>{setCounter(counter+1)}}>Counter++</button>
    <h1>Counter: {counter}</h1>
    </>
  )
}


export default App;

// useMemo hook is used to return a memoized value and helps in increasing the performance of the web application.
// useMemo hook only returns a value when there is a change in dependency array.
// useMemo and useCallback they both are used to increase the performance of the web application but the key difference between useMemo and useCallback is that
// useMemo returns a value where as useCallback returns a function.
import React, {useCallback, useState} from 'react';
import Header from './components/Header';


function App(){

  const [count, setCount] = useState(0);

  const newFunction = useCallback(() =>{}, [Header]);
  return (
    <>
    <Header newFunction = {newFunction}/>
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count+1)}>Click here</button>
    </>
  )
}

export default App;
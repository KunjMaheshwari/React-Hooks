import React from "react";
import { useState, useReducer } from "react";


function App(){
  // const [count, setCount] = useState(0);

  const initialState = {count: 0};

  const reducer = (state, action) => {
    switch(action.type){
      case 'Increase':{
        return {count: state.count +1};
      }
      case 'Decrease':{
        return {count: state.count -1};
      }
      case 'input':{
        return {count: action.payload};
      }
      default:{
        return state;
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick = {() => dispatch({type: 'Increase'})}>Increase</button>
      <button onClick = {() => dispatch({type: 'Decrease'})}>Decrease</button><br></br>
      <input value={state.count} onChange={(e) => dispatch({type: 'input', payload: Number(e.target.value)})} type="number" />
    </>
  )
}

export default App;

// useReducer is similar to useState but instead of passing the state and the setter function it passed the state and the dispatch function.
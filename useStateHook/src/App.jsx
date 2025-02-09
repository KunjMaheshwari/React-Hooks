import React, {useState} from 'react';

function App(){

  // const [color, setColor] = useState("Red");

  // function handleColorChange(){
  //   setColor("Blue");
  // }

  // const[car, setCar] = useState({
  //   brand: "Ferrari",
  //   model: "Roma",
  //   year: 2020,
  //   color: "Red"
  // })

  // function handleColorChange(){
  //   setCar((prev) => {
  //     return {...prev, color: "Blue"};
  //   })
  // }

  const [count, setCount] = useState(0);

  function handleCountIncrease(){
    setCount(count => count+4);
  }


  return (
    <>
    {/* <h1>My favourite color is {color}</h1>
    <button onClick = {handleColorChange}>Blue</button> */}

    {/* <h1>My {car.brand}</h1>
    <p>It is a {car.color} {car.model} from {car.year}.</p>
    <button onClick = {handleColorChange}>Blue</button> */}

      <h1>Count: {count}</h1>
      <button onClick = {handleCountIncrease} >Increase</button>
    </>
  )
}


export default App;
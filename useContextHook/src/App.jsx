import React from 'react';
import Profile from './components/Profile';
import Footer from './components/Footer';


function App(){
  return (
    <>
    <Profile />
    <Footer />
    </>
  )
}


export default App;

// useContext is a hook which allow us to access data from any component without passing props at each level.
// useContext is used to manage global data in react app.
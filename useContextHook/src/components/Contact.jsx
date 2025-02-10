import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {

    const {phone} = useContext(AppContext);
    const {name} = useContext(AppContext);
  return (
    <div>
      <h1>Contact</h1>
      <h3>Phone: {phone}</h3>
      <p>Name: {name}</p>
    </div>
  )
}

export default Contact;

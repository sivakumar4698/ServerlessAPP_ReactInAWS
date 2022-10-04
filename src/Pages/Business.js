import React, {useState, useEffect} from 'react'
//import BusinessNotes from '../data/BusinessNotes.json'

 const Business = () => {
  const [BusinessNotes, setBusinessNotes] = useState([]);


  const BusinessQoutes = async() => {
    const res = await fetch('https://m1sn4pr625.execute-api.us-east-1.amazonaws.com/Production/businessqoutes')
    let data = await res.json();

    setBusinessNotes(data)
  }

  useEffect(() => {
    BusinessQoutes()
  }, [])

  return (
    <>
    {
      BusinessNotes.map((note) => 
      <li>{note.qoute}, {note.explanation}, {note.Mythoughts}</li>)
    }
    </>
  )
}

export default Business;

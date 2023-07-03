import React, { useState, useEffect } from 'react'
import {useParams, useNavigate } from 'react-router-dom';


const SingleNote = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState('');

  useEffect(() => {
    getNote();
  },[id]);

   const getNote = async () => {  
    if(id === 'new') return

    const response = await fetch(`/home/notes/${id}/`)
    const data = await response.json()
    setNote(data)
  }

  let deleteNote = async () => {
    fetch(`/home/notes/${id}/delete/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    navigate('/')
}

let createNote = async () => {
  fetch(`/home/notes/create/`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
  })
}


  const updateNote = async () => {
    fetch(`/home/notes/${id}/update/`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
  })
}

  const handleSubmit = () => {
   if( id !== 'new' && note.body === ''){
      deleteNote();
   } else if(id !== 'new') {
      updateNote()
   } else if(id === 'new' && note.body !== null){
      createNote()
   }
    // redirect user
    navigate('/');
  }
  let handleChange = (value) => {
    setNote(note => ({ ...note, 'body': value }))
}

  return (
    <div className="note" >
      <div className="note-header">
        <button onClick={handleSubmit}>
        &#x25c0; 
         </button>
         {id !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
      ) : (
          <button onClick={handleSubmit}>Done</button>
      )}
        
      </div>
      <textarea onChange={(e) => handleChange(e.target.value)} value={note.body}/>
    </div>
  )
}

export default SingleNote;
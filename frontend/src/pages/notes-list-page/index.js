import React, { useState, useEffect } from 'react'
import {useParams, useNavigate } from 'react-router-dom';

import ListItem from '../../components/list-item';
import AddButton from '../../components/add-button'

const NotesListPage = () => {
    const {id} = useParams();

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    },[])

    const getNotes = async () => {
        let response =  await fetch('/home/notes/')
        let data = await response.json();
        setNotes(data);
     }

     let getTime = (note) => {
        return new Date(note).toLocaleDateString()
    }
    
  return (
   <div className="notes">
        <div className="notes-header">
             <h1 className='notes-title'>&#9782; Notes</h1>
        </div>
        <div className="notes-list">
        {notes.map((note, idx) => {
        return (
            <ListItem note={note.body} key={idx} id={note.id} updatedAt={getTime(note.updated)}/>
        )
        })}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage;
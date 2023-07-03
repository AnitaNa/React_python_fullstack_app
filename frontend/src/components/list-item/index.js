import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note, id, updatedAt}) => {

  const getTitle = (note) => { 
    let title = note?.split('\n')[0]
    if (title?.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

const getContent = (note) => {
  let title = getTitle(note)
  let content = note?.replaceAll('\n', ' ')
  content = content?.replaceAll(title, '')

  if (content?.length > 45) {
      return content?.slice(0, 45) + '...'
  } else {
      return content
  }
}

  return (
    <Link to={`/note/${id}`}>
      <div className="notes-list-item" >
        <h3 style={{color: '#21ece1'}}>{getTitle(note)}</h3>
        <p>{getContent(note)}<span style={{display: 'block'}}>{updatedAt}</span></p>
      </div>
    </Link>
  )
}

export default ListItem;
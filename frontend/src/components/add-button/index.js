import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = () => {
    return (
        <Link to="/note/new" className="floating-button">
            <span style={{color: '#1f2124'}}>+</span>
        </Link>
    )
}

export default AddButton
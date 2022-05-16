import React from 'react'
import { Link } from 'react-router-dom'
import './MembersScreen.css'
import MembersTable from './MembersTable'

const MembersScreen = () => {
  return (
    <div className='container'>  
      <h1 className='title'>Miembros</h1>

      <div className='backoffice-members__upper-bar'>
        <Link to='/backoffice/members/create'>
            <button className='primary-backoffice-button'>Crear nuevo miembro</button>
        </Link>
      </div>
      
      <MembersTable/>

    </div>
  )
}

export default MembersScreen;
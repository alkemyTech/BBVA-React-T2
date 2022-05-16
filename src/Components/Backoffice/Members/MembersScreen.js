import React from 'react'
import { Link } from 'react-router-dom'
import './MembersScreen.css'
import MembersTable from './MembersTable'

const MembersScreen = () => {
  return (
    <div className='main members-screen'>
      <div className='container'>

        <h1 className='title members-title'>Miembros</h1>

        <div className='members__upper-bar'>
          <Link to='/backoffice/members/create'>
              <button className='primary-backoffice-button'>Crear nuevo miembro</button>
          </Link>
        </div>
        
        <MembersTable/>

      </div>
    </div>
  )
}

export default MembersScreen;
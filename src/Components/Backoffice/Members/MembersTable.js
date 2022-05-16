import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Get, Delete } from '../../../Services/privateApiService';

const MembersTable = () => {
  const [MembersData, setMembersData] = useState([])

  const Members = [{ id: 1, name: 'miembro1', email: 'miembro1@email.com', photo:'photo1'},
  { id: 2, name: 'miembro2', email: 'miembro2@email.com', photo:'photo2'},
  { id: 3, name: 'miembro3', email: 'miembro3@email.com', photo:'photo3'},
  { id: 4, name: 'miembro4', email: 'miembro4@email.com', photo:'photo4'},
  { id: 5, name: 'miembro5', email: 'miembro5@email.com', photo:'photo5'},
  { id: 6, name: 'miembro6', email: 'miembro6@email.com', photo:'photo6'}]

  const deleteMember = (id) => {
    Delete('users/' + id)
    fetchMembersData();
  }
  
  const fetchMembersData = async () => {
    const res = await Get("members?limit=10");
    setMembersData(res.data.data)
  };
  
  useEffect(() => {
    // fetchMembersData();
  }, []);
  


  return (
    <table className='members-table'>
      <thead>
        <tr>
            <th className='member-th'>Nombre</th>
            <th className='member-th'>Email</th>
            <th className='member-th'>Foto</th>
        </tr>
      </thead>
      <tbody>

        {Members.map( (member) =>{
            return(
                <tr key={member.id}>
                    <td className='member-text'>{member.name}</td>
                    <td className='member-text'>{member.email}</td>
                    <td className='member-text'>{member.photo}</td>
                    <td>
                        <Link to={`/backoffice/members/edit/${member.id}`}>
                          <button className='primary-backoffice-button'>
                            Editar
                          </button>
                        </Link> 
                    </td>
                    <td>
                        <button onClick={() => deleteMember(member.id)} 
                                className='secondary-backoffice-button'>
                          Borrar
                        </button>
                    </td>
                </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default MembersTable



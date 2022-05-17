import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Get, Delete } from '../../../Services/privateApiService';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './MembersTable.css'

const BASE_URL = process.env.REACT_APP_BASE_URL
const ENDPOINT = process.env.REACT_APP_MEMBERS

const MembersTable = () => {
  const [membersData, setMembersData] = useState([])

  const deleteMember = (id) => {
    const url = BASE_URL + ENDPOINT;
    Delete(url +'/' + id)
    fetchMembersData();
  }
  
  const fetchMembersData = async () => {
    const url = BASE_URL + ENDPOINT
    const res = await Get (url + "?limit=20");
    const { data } = res.data;
    setMembersData(data)
  };
  
  useEffect(() => {
    fetchMembersData();
  }, []);
  


  return (
    <div className='members-table'>
      <table >
        <thead>
          <tr>
              <th className='member-th'>Nombre</th>
              <th className='member-th'>Foto</th>
              <th className='member-th'>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {membersData.map( (member) =>{
              return(
                  <tr key={member.id}>
                      <td className='member-text'>
                        {member.name}
                      </td>

                      <td className='member-text'>
                        <div className='member-container-img'>
                          <img className='member-img' src={member.image}/>
                        </div>
                      </td>

                      <td className='member-text'>
                          <Link to={`/backoffice/members/edit/${member.id}`}>
                            <button className='primary-backoffice-button'>
                              Editar
                            </button>
                          </Link> 
                      </td>

                      <td className='member-text'>
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
      {/* <Stack spacing={2} className="pagination-stack">
        <Pagination size="large" variant="outlined" count={10} color="primary" />
      </Stack> */}
    </div>
  )
}

export default MembersTable



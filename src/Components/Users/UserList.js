import { Get, Delete } from '../../Services/privateApiService'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserList.css'

const UserList = () => {
    
    const [userList, setUserList] = useState([])

    const deleteUser = (id) => {
        console.log('Usuario ' + id + ' borrado')
    }

    const fetchData = async () => {
        const res = await Get("/users");
        setUserList(res.data)
        console.log(userList)
      };

      useEffect(() => {
        fetchData();
      }, []);
    
    return(
        <div className="main">
        <div className="container">
            <h1 className='title-users'>Usuarios</h1>
            <div className='align-right'>
                <Link to={'/backoffice/users/create'}>
                    <button className='primary-backoffice-button'>Crear usuario</button>
                </Link>
            </div>
            <table className='users-table'>
                <tr>
                    <th className='user-text th-text'>Nombre</th>
                    <th className='user-text th-text'>Email</th>
                </tr>
                {userList.map( (user) =>{
                    return(
                        <tr key={user.id}>
                            <td className='user-text'>{user.name}</td>
                            <td className='user-text'>{user.email}</td>
                            <td>
                                <Link to={'/backoffice/users/edit/' + user.id}><button className='primary-backoffice-button'>Editar</button></Link> 
                            </td>
                            <td>
                                <button onClick={() => deleteUser(user.id)} className='secondary-backoffice-button'>Borrar</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </div>
    )
}

export default UserList
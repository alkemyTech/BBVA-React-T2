import { Get, Delete } from '../../Services/privateApiService'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <>
            <h1>Holo</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
                {userList.map( (user) =>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={'/backoffice/users/' + user.id}><button>Editar</button></Link> 
                            </td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Borrar</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default UserList
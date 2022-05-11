import { Get } from '../../Services/privateApiService'
import { useEffect, useState } from 'react'

const UserList = () => {
    
    const [userList, setUserList] = useState([])

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
                {userList.map( (user) =>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button>Editar</button></td>
                            <td><button>Borrar</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default UserList
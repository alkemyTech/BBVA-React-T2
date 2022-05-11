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
            <ul>
                {userList.map( (user) =>{
                    return(
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default UserList
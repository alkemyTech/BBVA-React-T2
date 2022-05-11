import { Get } from '../../Services/privateApiService'
import { useEffect, useState } from 'react'

const UserList = () => {
    
    const [userList, setUserList] = useState([])

    const fetchData = async () => {
        const res = await Get("users");
        console.log(res)
      };
    
    return(
        <>
            <h1>Holo</h1>
        </>
    )
}

export default UserList
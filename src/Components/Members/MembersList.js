import { useState, useEffect } from 'react';
import Get from '../../Services/publicApiService';
import { Link } from 'react-router-dom';

function MembersList() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            const response = await Get('members');
            const membersList = await response.data.data;
            console.log(membersList);
            setMembers([...membersList]);
        }

        getMembers();

    }, [])

    return ( 
        <>
            
        </>
     );
}

export default MembersList;
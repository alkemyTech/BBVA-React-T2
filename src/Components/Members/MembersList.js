import { useState, useEffect } from 'react';
import Get from '../../Services/publicApiService';
import './MembersList.css';

function MembersList({ numberOfMembers = 5 }) {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            const response = await Get('members', null, `skip=1&limit=${numberOfMembers}`);
            const membersList = await response.data.data;
            console.log(membersList);
            setMembers([...membersList]);
        }

        getMembers();

    }, [])

    return ( 
        <div className="members-list">
            {
                members.map(member => (
                    <div className="member" key={member.id}>
                        <img className="member__img" src={member.image} alt={`Foto de ${member.name}`} />
                        <div className="member__body">
                            <h4 className="member__name">{member.name}</h4>
                            <div className="member__description" dangerouslySetInnerHTML={{__html: member.description}}></div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}

export default MembersList;
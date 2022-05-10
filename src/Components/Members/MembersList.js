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
            {
                members.map(member => (
                    <>
                        <div class="member">
                            <img className="member__img" src={member.image} alt={`Foto de ${member.name}`} />
                            <div className="member__body">
                                <h5 className="member__name">{member.name}</h5>
                                <div className="member__description" dangerouslySetInnerHTML={{__html: member.description}}></div>
                                <a href="#" className="member__button-cta" type="button">¡Quiero ser parte!</a>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
     );
}

export default MembersList;
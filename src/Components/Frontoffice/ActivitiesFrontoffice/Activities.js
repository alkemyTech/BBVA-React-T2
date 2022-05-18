import Activity from './Activity'
import { useState, useEffect } from 'react'
import { Get } from '../../../Services/privateApiService';

{/* Utiliza método get para taer lista de actividades */}

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_ACTIVITIES;

    const getActivities = async () => {
        let res = await Get(endpoint);
        setActivities(res.data.data)
    }

    useEffect(() => {
        getActivities()
    },[setActivities])

  return (
    <div className="general-container-activities">
        {
            activities.map((activity) => {
                return (
                    <Activity 
                        id={activity.id} 
                        name={activity.name} 
                        image={activity.image} 
                        key={activity.id} 
                    />
                )
            })
        }
    </div>
  )
}
export default Activities;
import Card from '../../Cards/Card/Card'
import { Get } from '../../../Services/publicApiService'
import { useState, useEffect } from 'react'
import alert from '../../Alerts/Alerts'
import './Testimonials.css'

const Testimonials = () => {
    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_TESTIMONIALS
    const [testimonials, setTestimonials] = useState([])

    const fetchTestimonials = async () => {
        try {
            const res = await Get(endpoint)
            setTestimonials(res.data.data)
        }
        catch (err) {
            alert("Something went wrong. Please try again", "There was an error fetching the data", "error");
        }
    }

    useEffect(() => {
        fetchTestimonials()
    }, [])

    return(
        <div>
            <h1 className="testimonials-title">Testimonios</h1>
        <div className="testimonials-container">
            {testimonials.map( (test) => {
                    const { id, name, image, description } = test
                    return(
                            <div className="testimonial-card" key={id}>
                                <Card 
                                imageSrc={image}
                                name={name}
                                desc={description}
                            />
                            </div>
                    )
                })}
        </div>
        </div>
    )
}

export default Testimonials
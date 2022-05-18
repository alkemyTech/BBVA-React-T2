import Card from '../Cards/Card/Card'
import { Get } from '../../Services/publicApiService'
import { useState, useEffect } from 'react'

const Testimonials = () => {
    const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_TESTIMONIALS
    const [testimonials, setTestimonials] = useState([])

    const fetchTestimonials = async () => {
        const res = await Get()
    }

    return(
        <div>

        </div>
    )
}

export default Testimonials
import axios from "axios";
import { useEffect, useState } from "react";
import "./Slider.css"

function Slider() {
    const [slides, setSlides] = useState([]);

    const [currentItem, setCurrentItem] = useState(0);

    const getSlides = async () => {
        const response = await axios.get("https://ongapi.alkemy.org/api/slides?limit=5")
        const slidesData = await response.data.data;
        setSlides(slidesData);
    }

    useEffect(() => {
        getSlides();

    }, [])

    return ( 
        <></>
     );
}

export default Slider;
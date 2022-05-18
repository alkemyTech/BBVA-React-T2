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
        <div>
            <div className="slider">
                <div className="slider__wrapper">
                    <div className="slider__inner" style={sliderInnerStyles}>
                        {sliderItems}
                    </div>
                </div>
                <div className="slider__indicators">
                    {sliderIndicators}
                </div>
                <div className="slider__arrows">
                    <span onClick={(e) => handleChange(e, "prev")} className="arrow arrow--prev">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </span>
                    <span onClick={(e) => handleChange(e, "next")} className="arrow arrow--next">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default Slider;
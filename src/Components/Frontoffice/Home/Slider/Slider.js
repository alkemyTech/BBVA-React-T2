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

    const sliderItems = slides.map(slide => (
        <div className="slider__item" key={slide.id}>
            <img className="item__image" src={slide.image} />
            <div className="item__caption">
                <h4 className="item__caption--name">{slide.name}</h4>
                <p className="item__caption--description">{slide.description}</p>
            </div>
            
        </div>
    ))

    const sliderIndicators = slides.map((slide, index) => (
        <button 
            key={index} 
            onClick={(e) => {
                items[index].scrollIntoView({behavior: "smooth"}); 
                setCurrentItem(index);
            }} 
            className={`item__button ${currentItem === index ? 'active' : ''}`}
        >
        </button>
    ))

    const sliderInnerStyles = {
        width: `${slides.length * 100}%`
    }

    const handleChange = (e, type) => {
        if(type === "next") {
            const nextItem = currentItem + 1;
            const isInOfRange = nextItem < items.length;
            if(isInOfRange) {
                setCurrentItem(nextItem);
                items[nextItem].scrollIntoView({behavior: "smooth"});
            }
        } else if(type === "prev") {
            const prevItem = currentItem - 1;
            const isInOfRange = prevItem >= 0;
            if(isInOfRange) {
                setCurrentItem(prevItem);
                items[prevItem].scrollIntoView({behavior: "smooth"});
            }
        }
    }

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
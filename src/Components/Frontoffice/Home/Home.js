import { useState, useEffect } from 'react';
// CSS
import './Home.css'
// Components
import MembersList from '../Members/MembersList'
import Card from '../../Cards/Card/Card'
import CardNews from '../../Cards/CardNews/CardNews';
// Services
import { Get } from '../../../Services/publicApiService'
import { Link } from 'react-router-dom';
//Header y footer
import PublicHeader from '../PublicHeader/PublicHeader';
import Footer from '../Footer/Footer';

const Home = () => {
    const [homeData, setHomeData] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);
    const [newsData, setNewsData] = useState([]);

    const { REACT_APP_BASE_URL, REACT_APP_ORGANIZATION, REACT_APP_TESTIMONIALS, REACT_APP_NEWS } = process.env

    const getHomeData = async () => {
        const res = await Get(REACT_APP_BASE_URL + REACT_APP_ORGANIZATION);
        setHomeData(res.data.data);
    };

    const getTestimonials = async () => {
        const res = await Get(REACT_APP_BASE_URL + REACT_APP_TESTIMONIALS + `?limit=5`);
        setTestimonialsData(res.data.data);
    };

    const getNews = async () => {
        const res = await Get(REACT_APP_BASE_URL + REACT_APP_NEWS + `?limit=5`);
        setNewsData(res.data.data);
    };

    useEffect(() => {
        getHomeData();
        getTestimonials();
        getNews();
    }, []);

    return (
        <>
        <PublicHeader/>
        <div className='home-frontoffice-container'>
            <div id='container-home-welcomeText-img'>
                <div className='home-left-container'>
                    <h1 className='home-welcome-title'>
                        {homeData.welcome_text}
                    </h1>
                    <p className='home-text-description'
                        dangerouslySetInnerHTML={{ __html: homeData.long_description }}>
                    </p>
                    <button
                        type='button'
                        className='primary-button contact__button'>
                        Contactanos
                    </button>
                </div>

                <img className='home-right-container'
                    src='./images/hands.png'
                    alt='imagen-de-bienvenida'
                />
            </div>

            {/* ABOUT SECTION*/}
            <div className='title-and-button-container'>
                <h3 className='home-title-about-section'>Nuestro Staff</h3>
                <Link
                    className='link-to-component'
                    to="/about">
                    Ver todos {`>`}
                </Link>
            </div>
            {/* ABOUT CARDS*/}
            <MembersList />

            {/* TESTIMONIALS SECTION*/}
            <div className='title-and-button-container'>
                <h3 className='home-title-about-section'>Testimonios</h3>
                <Link
                    className='link-to-component'
                    to="/testimonials">
                    Ver todos {`>`}
                </Link>
            </div>
            {/* TESTIMONIALS CARDS*/}
            <div className='testimonials-cards-container'>
                {
                    testimonialsData.map((testimonial) => (
                        <Card key={testimonial.id}
                            imageSrc={testimonial.image}
                            name={testimonial.name}
                            desc={testimonial.description}
                        />
                    ))
                }
            </div>

            {/* NEWS SECTION */}
            <div className='title-and-button-container'>
                <h3 className='home-title-about-section'>Novedades</h3>
                <Link
                    className='link-to-component'
                    to="/news">
                    Ver todas {`>`}
                </Link>
            </div>
            {/* NEWS CARDS*/}
            <div className='testimonials-cards-container'>
                {
                    newsData.map((newItem) => (
                        <CardNews key={newItem.id}
                            img={newItem.image}
                            name={newItem.name}
                            content={newItem.content}
                        />
                    ))
                }
            </div>

        </div>
        <Footer />
        </>
    )
}

export default Home
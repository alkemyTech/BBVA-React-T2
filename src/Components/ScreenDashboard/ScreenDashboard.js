import { Link } from 'react-router-dom'
import "../ScreenDashboard/ScreenDashboardStyles.css";

const screenDashboard = () => {
  return (
    <div className="container-dashboard">
      <div className="container-cards">
        <div className="card">
          <div className="name-card">
            <p>Novedades</p>
          </div>
          <div className="image-card">
            <img className="img-card-dashboard img-card-dashboard-news" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/news'><button className="btn-screendashboard">Ir</button></Link>           
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Actividades</p>
          </div>
          <div className="image-card">
            <img className="img-card-dashboard img-card-dashboard-activities" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/activities'><button className="btn-screendashboard">Ir</button></Link> 
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Categorías</p>
          </div>
          <div className="image-card"> 
            <img className="img-card-dashboard img-card-dashboard-categories" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/categories'><button className="btn-screendashboard">Ir</button></Link>
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Testimonios</p>
          </div>
          <div className="image-card">
            <img className="img-card-dashboard img-card-dashboard-testimonials" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/testimonials'><button className="btn-screendashboard">Ir</button></Link> 
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Organización</p>
          </div>
          <div className="image-card"> 
            <img className="img-card-dashboard img-card-dashboard-organization" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/organization'><button className="btn-screendashboard">Ir</button></Link>
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Slides</p>
          </div>
          <div className="image-card"> 
            <img className="img-card-dashboard img-card-dashboard-slides" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/slides'><button className="btn-screendashboard">Ir</button></Link>
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Usuarios</p>
          </div>
          <div className="image-card">
            <img className="img-card-dashboard img-card-dashboard-users" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/users'><button className="btn-screendashboard">Ir</button></Link>
          </div>
        </div>
        <div className="card">
          <div className="name-card">
            <p>Miembros</p>
          </div>
          <div className="image-card">
            <img className="img-card-dashboard img-card-dashboard-members" src="" alt="" />
          </div>
          <div className="btn-card">
            <Link to='/members'><button className="btn-screendashboard">Ir</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default screenDashboard;
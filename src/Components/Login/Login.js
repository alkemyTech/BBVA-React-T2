import { useState } from 'react';

import '../Login/LoginStyle.css';

const Login = () => {

const [formData, setFormData] = useState({email: '', password:''})

  const submitHandler = (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Envío de formulario: ' , email, password)
    
  }

  return (
    
    <div className="container-login">

      <div className="mobile-top-login">
        <div className="logo">
          <div className="container-figures">
            <div className="triangle-logo"></div>
            <div className="square-logo"></div>
            <div className="circle-logo"></div>
          </div>
          <div className="name-logo">Somos mas</div>
        </div>
      </div>

      <div className="desktop-right-login"  >
        
      </div>
      
      <div className="desktop-left-login mobile-bottom-login container-form">
        <div className="container-message-welcome-desktop">
          <div className="message-welcome-desktop">Bienvenido</div><br/>
          <div className="message-start-session-desktop">Inicia sesión en tu cuenta!</div>
        </div>
        <div className="form">
          <form className="form-login" onSubmit={submitHandler} >
            <input className="input-login" name="email" type="email" placeholder="Email" required></input><br/><br/>
            <input className="input-login" name="password" type="password" placeholder="Contraseña" required></input><br/><br/>
            <button className="button-login" type="submit" >Login</button>
          </form>
          <br/>
          <div className="register-link-container">
            <div className="register-question">No tienes cuenta? </div>
            <div className="register-link" > Registrate! </div>
          </div>
        </div>
      </div>
        
      
    </div>
  )
}
export default Login
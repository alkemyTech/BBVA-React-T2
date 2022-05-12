import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import setLogin from "../../Services/Login.service";

import "../Login/LoginStyle.css";

const Login = () => {
  const [submittedForm, setSubmittedForm] = useState(false);
  const [token, setToken] = useState();

  function handleSubmit(user, {resetForm}) {
    console.log(user)
    
      setLogin(user)
        .then((res) => {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {})
        .finally(() => {});
      resetForm();
      setSubmittedForm(true);
      setTimeout(() => setSubmittedForm(false), 5000);
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

      <div className="desktop-right-login"></div>

      <div className="desktop-left-login mobile-bottom-login container-form">
        <div className="container-message-welcome-desktop">
          <div className="message-welcome-desktop">Bienvenido</div>
          <br />
          <div className="message-start-session-desktop">
            Inicia sesión en tu cuenta!
          </div>
        </div>
        <div className="form">
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validate={(user) => {
              let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
              let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{6,100}$/;
              let errors = {};
              if (!user.email) {
                errors.email = "*Campo obligatorio";
              } else if (!regexEmail.test(user.email)) {
                errors.email = "Email inválido";
              }
              if (!user.password) {
                errors.password = "*Campo obligatorio";
              } else if (!regexPassword.test(user.password)) {
                errors.password = "Contraseña inválida";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({errors}) => (
              <Form className="form-login" >
                <Field
                  className="input-login"
                  name="email"
                  type="email"
                  placeholder="Email"
                ></Field>
                <ErrorMessage name="email" component={() => (
                  <div className="error">{errors.email}</div>
                )} />
                <br />
                <br />
                <Field
                  className="input-login"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                ></Field>
                <ErrorMessage name="password" component={() => (
                  <div className="error">{errors.password}</div>
                )} />
                <br />
                <br />
                <button className="button-login" type="submit">
                  Login
                </button>
                {submittedForm && <p className="success">Logueo correcto</p>}
              </Form>
            )}
          </Formik>
          <br />
          <div className="register-link-container">
            <div className="register-question">No tienes cuenta? </div>
            <div className="register-link"> Registrate! </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
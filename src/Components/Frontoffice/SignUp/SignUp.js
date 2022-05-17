// React
import { useState } from "react";
import { Link } from "react-router-dom";
// Components
import FormInput from './FormInput';
// CSS
import '../../general-styles.css'
import './SignUp.css';
// Resources
import signUpImg from '../Login/imagenONG.jpeg';

export const SignUp = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const inputs = [
        {
            name: "username",
            type: "text",
            placeholder: "Nombre",
            pattern: `^[A-Za-z]{3,16}$`,
            errorMessage: "El nombre debe ser más largo"
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Email inválido"
        },
        {
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            pattern: `^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$`,
            errorMessage: `Contraseña obligatoria debe tener una longitud mínima de 6 caracteres,
                           y contener al menos un número, una letra y un símbolo (por ejemplo: @#$%)`
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Repite la contraseña",
            pattern: values.password,
            errorMessage: "Las contraseña no coinciden"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value });
    };

    return (
        <>
            <div className="form-container">
                <img className="logo" src='./logo.svg' alt="logo-ONG" />

                <form onSubmit={handleSubmit}>
                    {inputs.map((input, index) => (
                        <FormInput
                            key={index}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}

                    <button className="primary-button" type="submit">Registrate</button>

                    <span>Ya tienes cuenta?
                        <Link to="/login">Ingresa!</Link>
                    </span>
                </form>
            </div >
            <img className="container-hands-img" src={signUpImg} alt="signup-img" />
        </>
    );
};

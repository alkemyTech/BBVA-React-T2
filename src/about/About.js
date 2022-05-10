import "./About.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Get } from "../Services/publicApiService";

const About = () => {

  const [text, setText] = useState("");
  const [logo, setLogo] = useState("")

  const fetchData = async () => {
    const res = await axios.get("https://ongapi.alkemy.org/api/organization");
    console.log(res);
    setText(res.data.data.long_description);
    setLogo(res.data.data.logo)
  };

  

  useEffect(() => {
    const res = Get('organization')
    setText(res.data.data.long_description);
    setLogo(res.data.data.logo)
  }, [text]);
  
  return (
      <div className="container">
        <h1>Nosotros</h1>
        <div className="logo">
            <div className="main-text">{text}</div>
            <img src='./images/blog-img-03.jpg' />
        </div>
      </div>
  );
};

export default About;

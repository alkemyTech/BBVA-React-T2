import "./About.css";
import axios from "axios";
import { useState, useEffect } from "react";

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
    fetchData();
  }, []);
  
  return (
      <div className="container">
      <h1>Nosotros</h1>
      <div className="logo"><img src={logo} /></div>
      <div className="main-text">{text}</div>
      </div>
  );
};

export default About;

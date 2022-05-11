import "./About.css";
import { useState, useEffect } from "react";
import  Get  from "../Services/publicApiService";

const About = () => {

  const [text, setText] = useState("");

  const fetchData = async () => {
    const res = await Get("organization");
    setText(res.data.data.long_description);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
      <div className="container">
        <div className="logo">
            <div className="main-text">
                <h1 className="about-title">Nosotros</h1>
                <div className="about-text">{text}</div>
            </div>
            <img src='./images/hands.png' className="about-img"/>
        </div>
      </div>
  );
};

export default About;

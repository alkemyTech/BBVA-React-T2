import "./About.css";
import { useState, useEffect } from "react";
import { Get } from "../Services/publicApiService";

const About = () => {

  const [text, setText] = useState("");
  const [logo, setLogo] = useState("")


  useEffect(() => {
    
    const fetchData = async () => {
        const res = await Get("organization");
        console.log(res);
        setText(res.data.data.long_description);
        setLogo(res.data.data.logo)
      };

    fetchData();
  }, []);
  
  return (
      <div className="container">
        <div className="logo">
            <div className="main-text">
                <h1>Nosotros</h1>
                <div className="about-text">{text}</div>
            </div>
            <img src='./images/hands.png' />
        </div>
      </div>
  );
};

export default About;

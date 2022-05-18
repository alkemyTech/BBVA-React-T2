import "./About.css";
import { useState, useEffect } from "react";
import  { Get }  from "../../../Services/publicApiService";
import MembersAbout from "../Members/MembersAbout";

const About = () => {

  const [text, setText] = useState("");

  const fetchData = async () => {
    const res = await Get(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_ORGANIZATION);
    setText(res.data.data.long_description);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div className="container-about">
        <div className="section-container-about">
            <div className="main-text">
                <h1 className="about-title">Nosotros</h1>
                <div className="about-text">{text}</div>
            </div>
            <img src='./images/hands.png' className="about-img"/>
        </div>
      </div>
      <MembersAbout/>
    </>
  );
};

export default About;

import axios from "axios";
import { useState, useEffect } from "react";

const MainText = () => {
  const [text, setText] = useState("");

  const fetchData = async () => {
    const res = await axios.get("https://ongapi.alkemy.org/api/organization");
    console.log(res);
    setText(res.data.data.long_description);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="main-text">{text}</div>;
};

export default MainText;
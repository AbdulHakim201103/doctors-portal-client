import React from "react";
import "./NotFound.css";
import notfound from "../../../assets/not-found/notfound.webp";

const NotFound = () => {
  return (
    <div>
      <img className="notfound-img" src={notfound} alt=""></img>
    </div>
  );
};

export default NotFound;

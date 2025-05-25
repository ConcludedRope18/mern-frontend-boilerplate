import React from 'react';
import "./pfp.css";

const Pfp = ({ imageUrl, altText = "Profile Picture" }) => {
  return <img className="pfp" src={imageUrl} alt={altText} />;
};

export default Pfp;
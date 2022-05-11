import React from "react";

const InfoCard = ({ img, cardTitle, cardBody, bgClass }) => {
  return (
    <div className={`card p-10 lg:card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto uppercase text-white">{cardTitle}</h2>
        <p className="text-white text-center">{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;

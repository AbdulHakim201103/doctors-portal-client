import React from "react";

const InfoCard = ({ img,cardTitle,cardBody,bgClass }) => {
  return (
    <div class={`card p-10 lg:card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
          <h2 class="card-title mx-auto uppercase text-white">{cardTitle}</h2>
          <p className="text-white text-center">{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;

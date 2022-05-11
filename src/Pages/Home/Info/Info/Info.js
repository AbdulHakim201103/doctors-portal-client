import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        bgClass="bg-primary"
        cardBody="10am - 5pm"
        cardTitle="Opening Hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgClass="bg-accent"
        cardBody="New York - 101010 Hudson"
        cardTitle="Visit our location"
        img={marker}
      ></InfoCard>
      <InfoCard
        bgClass="bg-primary"
        cardBody="+8801703454892"
        cardTitle="Contact us now"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;

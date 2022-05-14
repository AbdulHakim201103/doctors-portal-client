import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentServiceCade from "../AppointmentServiceCade/AppointmentServiceCade";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-20">
      <h1 className=" text-center my-24  text-secondary text-2xl">
        Available Appointment on {format(date, "PP")}
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppointmentServiceCade
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentServiceCade>
        ))}
      </div>
      {treatment && (
        <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

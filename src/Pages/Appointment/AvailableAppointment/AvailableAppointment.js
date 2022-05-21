import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentServiceCade from "../AppointmentServiceCade/AppointmentServiceCade";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`https://aqueous-scrubland-42523.herokuapp.com/available?date=${formattedDate}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return (
      <button className="btn flex mx-auto my-4 bg-white text-red-500 border-0 loading">
        loading
      </button>
    );
  }

  return (
    <div className="container mx-auto my-20">
      <h1 className=" text-center my-24  text-secondary text-2xl">
        Available Appointment on {format(date, "PP")}
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <AppointmentServiceCade
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentServiceCade>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

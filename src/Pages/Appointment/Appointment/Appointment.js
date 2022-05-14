import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import "./Appointment.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container mx-auto">
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;

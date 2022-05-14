import React from "react";

const AppointmentServiceCade = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary mx-auto py-3">{name}</h2>
        <small className="text-center">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600">Try Another Date</span>
          )}
        </small>
        <small className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </small>
        <div className="card-actions justify-end py-5">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary mx-auto"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServiceCade;

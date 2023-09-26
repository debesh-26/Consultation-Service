import React from "react";
import "./Doctor.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
const Doctor = ({ doctors }) => {
    console.log(doctors)
  return (
    <div className="doctor-card-container">
      {doctors.map((doctor) => (
        <div className="doctor-card" key={doctor.userId}>
          <>
            <div className="doctor-img-container">
              <img src={doctor.avatar} alt={doctor.username} />
              <div className="tick-circle">&#10003;</div>
            </div>
            <div className="doctor-details">
              <div className="doctor-name">Dr. {doctor.username}</div>
              <div className="doctor-info">{doctor.category}</div>
              <div className="experience">1{doctor.year} years experience overall</div>
              <div className="location">{doctor.location},{doctor.state}</div>
              <div className="fee">{doctor.Consultantion} Consultantion fee at clinic</div>
              <div className="doctor-details-percent">
                <button>
                  <FaThumbsUp />
                  {doctor.percentage}%
                </button>
                <span
                  style={{ fontWeight: 500, borderBottom: "1px solid black" }}
                >
                  {doctor.Patient} Patient Stories
                </span>
              </div>
            </div>
          </>
          <div className="button-container">
            <div className="available-today">
              <AiOutlineCalendar /> Available Today
            </div>
            <button className="book-button">
              <span style={{ fontSize: "16px", fontWeight: 600 }}>
                Book Appointment
              </span>
              <span>No booking Fee</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctor;
import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "antd";
import { AppointmentCard } from "../components/AppointmentCard";
import "../css/appointment.css";

const Appointments = () => {
  const [appoint, setAppoint] = useState({
    name: "",
    specialist: "",
    rating: 4.3,
    startTime: "1:30pm",
    endTime: "2:00pm",
    imageurl: "",
  });

  return (
    <div className="Container">
      <Row>
        <h1>Upcoming Appointments</h1>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
        <AppointmentCard
          name={appoint.name}
          specialist={appoint.specialist}
          rating={appoint.rating}
          imageurl={appoint.imageurl}
          start={appoint.startTime}
          end={appoint.endTime}
        />
      </Row>
    </div>
  );
};

export default Appointments;

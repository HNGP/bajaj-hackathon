import React, { useState, useEffect } from "react";

import { Row, Col } from "antd";
import { AppointmentCard } from "../components/AppointmentCard";
import "../css/appointment.css";

const Appointments = () => {
  const [appoint, setAppoint] = useState({
    name: "Dr Hazel Pinto",
    specialist: "Endocrinologist",
    rating: 4.36,

    startTime: "1:30pm",
    endTime: "2:00pm",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMTY1OTk1NzQwOF5BMl5BanBnXkFtZTgwNDUzNTA3NjE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
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

import React, { useState, useEffect } from "react";
import { Card, Avatar, Button, Row, Col } from "antd";
import "../css/CurrentAppointment.css";
import OtherDocCard from "../components/OtherDocCard";

const CurrentAppointment = () => {
  const ab = "unavailable";
  const [appoint, setAppoint] = useState({
    name: "Dr Hazel Pinto",
    specialist: "Endocrinologist",
    rating: 4.36,
    startTime: "1:30pm",
    endTime: "2:00pm",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMTY1OTk1NzQwOF5BMl5BanBnXkFtZTgwNDUzNTA3NjE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
    status: "Unvailable",
  });

  const [otherDocs, setOtherDocs] = useState([
    {
      name: "Dr. Aboobacker",
      price: "₹800 per hour",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTAyMTI4ODQ3Ml5BMl5BanBnXkFtZTcwOTk0MjE1OQ@@._V1_.jpg",
    },
    {
      name: "Dr. Cheryl Wiig",
      price: "₹800 per hour",
      image:
        "https://d3d8y6yhucfd29.cloudfront.net/sports-product-image/6-t5198020-.jpg",
    },
    {
      name: "Dr. Ben Slater",
      price: "₹800 per hour",
      image: "https://pbs.twimg.com/media/EXT6-ZiWkAEgNy8.jpg",
    },
  ]);

  return (
    <div className="Container" style={{ marginTop: "-50px" }}>
      <Row>
        <h1>Current Appointment</h1>
      </Row>
      <div className="Appointment-card" hoverable>
        <Row>
          <Col>
            <Avatar
              style={{
                width: "100px",
                height: "100px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
              src={appoint.imageurl}
            ></Avatar>
          </Col>
          <Col>
            <h1 style={{ marginTop: "30px", marginLeft: "20px" }}>
              {appoint.name}
            </h1>
            <h2 style={{ marginLeft: "-130px" }}>{appoint.status}</h2>
            <h2 style={{ marginLeft: "20px" }}>Sunday, 5th August 2021</h2>
            <h2 style={{ marginLeft: "-50px" }}>1:30pm - 2:00pm</h2>
          </Col>
        </Row>
        {appoint.status === "Available" ? (
          <>
            <Row>
              <Col>
                <Button className="appointment-button">Chat Now</Button>
              </Col>
              <Col>
                <Button className="appointment-button">Cancel</Button>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Button
              className="appointment-button"
              style={{ backgroundColor: "#E23943", width: "440px" }}
            >
              Cancel Appointment
            </Button>
          </>
        )}
      </div>
      <Row style={{ marginTop: "50px" }}>
        <h3>Other Available Doctors</h3>
      </Row>
      <div className="OtherCardGroup">
        <OtherDocCard
          doctorname={otherDocs[0].name}
          rate={otherDocs[0].price}
          imageurl={otherDocs[0].image}
        />
        <OtherDocCard
          doctorname={otherDocs[1].name}
          rate={otherDocs[1].price}
          imageurl={otherDocs[1].image}
        />
        <OtherDocCard
          doctorname={otherDocs[2].name}
          rate={otherDocs[2].price}
          imageurl={otherDocs[2].image}
        />
      </div>
    </div>
  );
};

export default CurrentAppointment;

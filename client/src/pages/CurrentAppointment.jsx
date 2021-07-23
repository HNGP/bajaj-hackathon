import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar, Button, Row, Col } from "antd";
import "../css/CurrentAppointment.css";
import OtherDocCard from "../components/OtherDocCard";
import SpecialistContext from "../context/specialistContext";
import { Doctor } from "../doctor";

const CurrentAppointment = () => {
  const { specialist, setSpecialist } = useContext(SpecialistContext);
  let shortlist = [];
  Doctor.map((doc) => {
    if (doc.specialization === specialist) {
      shortlist.push(doc);
      return doc;
    }
  });
  function median(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  }
  let values = [];
  let max = [];
  for (let i = 0; i < shortlist.length; i++) {
    let weight = shortlist[i].experience * 0.6 + shortlist[i].fees * 0.4;
    values.push(weight);
  }
  console.log(values);
  const medianValue = median(values);
  console.log(medianValue);
  for (let i = 0; i < shortlist.length; i++) {
    let weight = shortlist[i].experience * 0.6 + shortlist[i].fees * 0.4;
    if (weight === medianValue) {
      max.push(shortlist[i]);
    }
  }
  let otherDocs = [];
  for (let i = 0; i < shortlist.length; i++) {
    if (!max.includes(shortlist[i])) {
      otherDocs.push(shortlist[i]);
    }
  }
  console.log(max);
  const ab = "unavailable";
  const [appoint, setAppoint] = useState({
    name: max[0].name,
    specialist: max[0].specialization,
    rating: max[0].rating,
    imageurl: max[0].photo,
    status: "Available",
  });

  const history = useHistory();
  const goToChat = () => {
    history.push("/chat");
  };

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
                <Button className="appointment-button" onClick={goToChat}>
                  Chat Now
                </Button>
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
        {otherDocs.map((user, i) => {
          return (
            <OtherDocCard
              doctorname={user.name}
              rate={user.fees}
              imageurl={user.photo}
            />
          );
        })}

        {/* <OtherDocCard
          doctorname={otherDocs[1].name}
          rate={otherDocs[1].price}
          imageurl={otherDocs[1].image}
        />
        <OtherDocCard
          doctorname={otherDocs[2].name}
          rate={otherDocs[2].price}
          imageurl={otherDocs[2].image}
        /> */}
      </div>
    </div>
  );
};

export default CurrentAppointment;

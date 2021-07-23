import React from "react";
import { Card, Image, Avatar, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import "../../src/App.css";
import "../css/appointment.css";
import CurrentAppointment from "../pages/CurrentAppointment";

const { Meta } = Card;

export const AppointmentCard = (props) => {
  const history = useHistory();

  const goToCurrent = () => {
    history.push("/currentAppointment");
  };

  return (
    <div className="AppointmentCard">
      <Row>
        <Col>
          <Avatar
            style={{
              width: "120px",
              height: "120px",
              marginTop: "20px",
              marginLeft: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            src={props.imageurl}
          ></Avatar>
        </Col>
        <Col>
          <h1>{props.name}</h1>
          <h2 style={{ marginLeft: "-80px" }}>{props.specialist}</h2>
          <h2 style={{ marginLeft: "-180px" }}>{props.rating}</h2>
        </Col>
      </Row>
      <Row>
        <div className="cardInset" onClick={goToCurrent}>
          <h1>
            {props.start} to {props.end}
          </h1>
        </div>
      </Row>
    </div>
  );
};

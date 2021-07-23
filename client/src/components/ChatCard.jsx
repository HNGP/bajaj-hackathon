import React from "react";
import { Card, Image, Avatar, Row, Col } from "antd";
import "../../src/App.css";
import "../css/chatCard.css";

const { Meta } = Card;
export const ChatCard = (props) => {
  return (
    <div className="AppointmentCard1">
      <Row>
        <Col>
          <Avatar
            style={{
              width: "80px",
              height: "70px",
              marginTop: "20px",
              marginLeft: "20px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            src={props.imageurl}
          ></Avatar>
        </Col>
        <Col>
          <h1>{props.name}</h1>
          <h2 style={{ marginLeft: "10px" }}>{props.specialist}</h2>
          <h2 style={{ marginLeft: "10px" }}>{props.rating}</h2>
        </Col>
      </Row>
      <Row>
        <div className="cardInset1">
          <h1>
            {props.start} to {props.end}
          </h1>
        </div>
      </Row>
    </div>
  );
};
export default ChatCard;

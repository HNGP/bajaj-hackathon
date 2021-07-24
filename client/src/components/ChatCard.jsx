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
          <div className="textInfo">
            <h1>{props.name}</h1>
            <h2>{props.specialist}</h2>
            <h2>₹{props.fees}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="cardInset1">
          <h1>End Session</h1>
        </div>
      </Row>
    </div>
  );
};
export default ChatCard;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar, Button, Row, Col, Input, Divider } from "antd";
import {
  CreditCardFilled,
  GoogleCircleFilled,
  AppleFilled,
} from "@ant-design/icons";
import "../css/payments.css";

const Payments = () => {
  return (
    <div className="PaymentLayout">
      <h1>Confirm payment to Bajaj Finserv Health</h1>
      <div className="PaymentCard">
        <Row>
          <CreditCardFilled
            style={{
              fontSize: "40px",
              marginRight: "20px",
              marginTop: "10px",
            }}
          />

          <h1>Credit Card</h1>
          <Input
            size="small"
            style={{ height: "40px", marginTop: "-10px", marginBottom: "20px" }}
          />
        </Row>
        <Divider />
        <Row style={{ marginTop: "-10px" }}>
          <Col span={12}>
            <GoogleCircleFilled
              style={{
                fontSize: "40px",
                marginRight: "20px",
                marginTop: "10px",
              }}
            />
            <h1>Google Pay</h1>
          </Col>
          <Col span={12}>
            <AppleFilled
              style={{
                fontSize: "40px",
                marginRight: "20px",
                marginTop: "10px",
              }}
            />
            <h1>Apple Pay</h1>
          </Col>
        </Row>
        <Divider />
        <Button className="PayButton">Pay</Button>
      </div>
    </div>
  );
};

export default Payments;

import React from "react";
import { Card, Avatar } from 'antd';
import { PromiseProvider } from "mongoose";
import '../css/CurrentAppointment.css';

const { Meta } = Card;

const CurrentAppointment = () => {
  const ab = "unavailable";
  return(
  <Card
    className="Appointment-card"
    hoverable
    // style={{ width: 300, marginTop: 16 }}
  >
    <Meta 
      avatar={
        <Avatar
        style={{
          width: "100px",
          height: "100px",
          marginTop: "20px",
          marginLeft: "20px",
        }}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      ></Avatar>
            }
      title="Dr Amy Santiago" 
      description="Dermatologist" 
    />
    <p>{ab}</p>
    <p>Sunday, 5th August 2021</p>
    <p>1:30pm - 2:00pm</p>
    {ab === "available" ? 
    <>
      <button>Chat Now</button>
      <button>Cancel</button>
    </>
    :
    <>
      <button>Cancel Appointment</button>
    </>
    }
  </Card>
);
};

export default CurrentAppointment;

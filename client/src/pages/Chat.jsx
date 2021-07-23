import React, { useState } from "react";
import { Row, Col, Button, Input, Divider } from "antd";
import "../css/chat.css";
import { ChatCard } from "../components/ChatCard";

const Chat = () => {
  const [appoint, setAppoint] = useState({
    name: "Dr Hazel Pinto",
    specialist: "Endocrinologist",
    rating: "Online",

    startTime: "1:30pm",
    endTime: "2:00pm",
    imageurl:
      "https://m.media-amazon.com/images/M/MV5BMTY1OTk1NzQwOF5BMl5BanBnXkFtZTgwNDUzNTA3NjE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
  });
  return (
    <div>
      <Row>
        <Col span={8}>
          <div className="container1">
            <h1 className="chatTitile"> Instant Chat</h1>
            <br></br>
            <ChatCard
              name={appoint.name}
              specialist={appoint.specialist}
              rating={appoint.rating}
              imageurl={appoint.imageurl}
              start={appoint.startTime}
              end={appoint.endTime}
              style={{ marginLeft: "200px" }}
            />
          </div>
          <Divider type={"vertical"} style={{ color: "black" }} />
        </Col>
        <Col span={12}>
          <Row>
            <div className="side">
              <Input placeholder="Message" className="inputText" />
              <Button
                type="primary"
                style={{
                  marginTop: "600px",
                  borderRadius: "20px",
                  backgroundColor: "#543B99",
                  border: "none",
                  marginLeft: "-50px",
                }}
              >
                Send
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Chat;

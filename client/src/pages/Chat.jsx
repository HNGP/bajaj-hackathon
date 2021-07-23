import React, { useState } from "react";
import { Row, Col } from "antd";
import "../css/chat.css";
import { ChatCard } from "../components/ChatCard";
import { Input } from "antd";
import { Divider } from "antd";

const Chat = () => {
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
    <div>
      <Row>
        <Col span={8}>
          <div className="container1">
            <h2 className="chatTitile"> Instant Chat</h2>
            <br></br>
            <ChatCard
              name={appoint.name}
              specialist={appoint.specialist}
              rating={appoint.rating}
              imageurl={appoint.imageurl}
              start={appoint.startTime}
              end={appoint.endTime}
            />
          </div>
          <Divider type={"vertical"} />
        </Col>
        <Col span={12}>
          <div className="side">
            Chat
            <br></br>
            <p className="senderBubble">Bajaj!!</p>
            <p className="recBubble">Hamara Bajaj</p>
            <Input placeholder="Message" className="inputText" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Chat;

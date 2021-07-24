import React, { useState, useEffect, useContext } from "react";
import { Card, Avatar, Button, Row, Col } from "antd";
import { SendOutlined } from "@ant-design/icons";
import DoctorContext from "../context/DoctorContext";
import "../css/ChatRoom.css";

import { ChatCard } from "../components/ChatCard";
import useChat from "../useChat";

const ChatRoom = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const { doctorContext, setDoctorContext } = useContext(DoctorContext);
  // const [doctorContext, setdoctorContext] = useState({
  //   name: "Dr Hazel Pinto",
  //   specialist: "Endocrinologist",
  //   rating: "Online",
  //   startTime: "1:30pm",
  //   endTime: "2:00pm",
  //   imageurl:
  //     "https://m.media-amazon.com/images/M/MV5BMTY1OTk1NzQwOF5BMl5BanBnXkFtZTgwNDUzNTA3NjE@._V1_UY1200_CR135,0,630,1200_AL_.jpg",
  // });

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <Col span={12}>
        {" "}
        <div className="container1">
          <h1 className="chatTitle"> Instant Chat</h1>
          <br></br>
          <ChatCard
            name={doctorContext.name}
            specialist={doctorContext.specialist}
            rating={doctorContext.rating}
            fees={doctorContext.fees}
            imageurl={doctorContext.imageurl}
            start={doctorContext.startTime}
            end={doctorContext.endTime}
            style={{ marginLeft: "200px" }}
          />
        </div>
      </Col>
      <Col span={12}>
        <div className="chat-room-container">
          <div className="messages-container">
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? "my-message"
                      : "received-message"
                  }`}
                >
                  {message.body}
                </li>
              ))}
            </ol>
          </div>
          <Row>
            {/* <div style={{ marginTop: "100px" }}> */}
            <textarea
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..."
              className="new-message-input-field"
              style={{ height: "50px" }}
            />
            <button
              style={{ marginLeft: "-40px", borderRadius: "10px" }}
              onClick={handleSendMessage}
              className="send-message-button"
            >
              <SendOutlined />
            </button>
            {/* </div> */}
          </Row>
        </div>
      </Col>
    </div>
  );
};

export default ChatRoom;

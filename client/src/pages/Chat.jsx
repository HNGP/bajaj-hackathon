import React, { useState } from "react";
import { Row, Col, Button, Input, Divider } from "antd";
import "../css/chat.css";
import { ChatCard } from "../components/ChatCard";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { set } from "mongoose";

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

  const [sentMsg, setSentMsg] = useState(["bund bhai", "theek hai lund"]);
  const [currentMsg, setCurrentMsg] = useState("");

  const sendMessage = () => {
    let tempMsgList = sentMsg;
    tempMsgList.push(currentMsg);
    console.log(tempMsgList);
    setSentMsg(tempMsgList);
  };

  const handleChange = (event) => {
    // setCurrentMsg(event.target.value);
    console.log(event.target.value);
    event.preventDefault();
  };

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
        <Col span={14}>
          <Row>
            <div
              className="side"
              style={{
                position: "relative",
                height: "800px",
                width: "100%",
                paddingLeft: "100px",
              }}
            >
              <MainContainer>
                <ChatContainer>
                  <MessageList>
                    <Message
                      model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        direction: "incoming",
                        sender: "Joe",
                      }}
                    />
                    {sentMsg.map((item) => {
                      console.log(item);
                      return (
                        <Message
                          model={{
                            message: item,
                            sentTime: "just now",
                            direction: "outgoing",
                            sender: "Me",
                          }}
                        />
                      );
                    })}
                  </MessageList>
                  <MessageInput
                    placeholder="Type message here"
                    attachButton={false}
                    // value={currentMsg}
                    onChange={handleChange}
                    onSend={sendMessage}
                  />
                </ChatContainer>
              </MainContainer>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Chat;

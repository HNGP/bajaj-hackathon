import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Image, Input, Space, Modal,} from "antd";
import "antd/dist/antd.css";
import "../css/landing.css";
import HeroImg from "../img/Graphic.png";
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;

const Landing = () => {
  
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('One appointment found!! Dr Hazel Pinto ( Endochronologist )');

  const history = useHistory();
  
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('One appointment found!! Dr Hazel Pinto ( Endochronologist )');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      history.push("/yourAppointments");
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <div className="hero">
      <Row>
        <Col>
          <div className="content-bg">
            <h2 classname="prebrand">we take care of</h2>
            <h1 className="brand">your health.</h1>
          </div>
        </Col>
        <Col>
          <div className="HeroBanner">
            <Image src={HeroImg} preview={false} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={15}>
          <div className="SearchBarDiv">
            <Search
              placeholder="Search for symptoms"
              allowClear
              enterButton="Search"
              size="large"
              color="purple"
              onSearch={showModal}
            />
            <Modal
              title="Available Doctors"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
            <p style={{color: "black"}}>{modalText}</p>
            </Modal>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingLeft: "150px" }}>
        <h2>Browse by specialties</h2>
      </Row>
      <Row style={{ paddingLeft: "150px", paddingTop: "50px" }}>
        <div className="cardGroup">
          <div className="Card-Alt" />
          <div className="Card-Alt" />
          <div className="Card-Alt" />
          <div className="Card-Alt" />
          <div className="Card-Alt" />
          <div className="Card-Alt" />
        </div>
      </Row>
    </div>
  );
};

export default Landing;

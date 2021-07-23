import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Row, Col, Image, Input, Space, Modal, Radio } from "antd";
import "antd/dist/antd.css";
import "../css/landing.css";
import HeroImg from "../img/Graphic.png";
import UserContext from '../context/userContext';
import SpecialistContext from '../context/specialistContext';
import { set } from "mongoose";
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;

const Landing = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const { specialist, setSpecialist } = useContext(SpecialistContext);

  const history = useHistory();

  const showModal = (value) => { 
    setVisible(true);
    let specialists = [];
    if(value === "toothache") {
      specialists.push("Dentist");
    } else if(value === "red eyes") {
      specialists.push("General Physician");
      specialists.push("Ophthalmologist");
    } else if(value === "cough") {
      specialists.push("General Physician");
      specialists.push("ENT");
    } else if(value === "rashes" || value === "dandruff") {
      specialists.push("Dermatologist");
    } else if(value === "depression") {
      specialists.push("Psychiatrist");
    }


    let spArray = specialists.map((specialist) =>  
        <Radio value={specialist} style={{ fontSize: "20px" }}>{specialist}</Radio> 
    );
    setModalText(spArray);  
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      history.push("/yourAppointments");
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const onChange = e => {
    setSpecialist(e.target.value);
  }

  // useEffect(() => {
  //   setSpecialist("gyna");
  //   console.log(specialist);
  // }, [])

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
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
            <Radio.Group onChange={onChange}>
              <Space direction="vertical">
                <h2
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                >
                  Choose a Specialty
                </h2>
                {modalText}
                {/* <Radio value={modalText.r1} style={{ fontSize: "20px" }}>
                {modalText.r1}
                </Radio>
                <Radio value={modalText.r2} style={{ fontSize: "20px" }}>
                {modalText.r2}
                </Radio>
                <Radio value={modalText.r3} style={{ fontSize: "20px" }}>
                {modalText.r3}
                </Radio> */}
              </Space>
            </Radio.Group>
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

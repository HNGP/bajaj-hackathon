import React, { useState, useEffect } from "react";
import { Button, Layout, Row, Col, Image } from "antd";
import "antd/dist/antd.css";
import "../css/landing.css";
import HeroImg from "../img/Graphic.png";
import { Input, Space } from "antd";
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;

const Landing = () => {
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
            />
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

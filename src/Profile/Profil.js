import React, { Children } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import propTypes from "prop-types";

const Profil = (props) => {
 console.log(`props:`, props.name, props.bio, props.profesion); 

  // Profil.defaultProps={
  // props.name ="Nihel",
  // props.bio ="I am 29 years old, i am from hammamet, and i am a fullstack JS developer",
  // props.profesion ="fullstack JS developer"
  //}
  return (
   <div>
    <Container
      style={{
        backgroundColor: "#00004d",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <Row>
        <Col style={{margin:"20px"}}>
        {props.children}
        </Col>
      </Row>
      <Row>
        <Col>
          <span style={{ fontWeight: "bold" }}>FullName: </span>
          {props.name}
        </Col>
        <Col xs={6}>
          <span style={{ fontWeight: "bold" }}>Bio: </span>
          {props.bio}
        </Col>
        <Col>
          <span style={{ fontWeight: "bold" }}>profesion: </span>
          {props.profesion}
        </Col>
      </Row>
      <Row>
        <Col style={{margin:"20px"}}>
        <button onClick={() => props.alertMyInput(props.name)}>
        Show me your Name
      </button>
        </Col>
      </Row>
      <Row>
        <Col>
      
        </Col>
      </Row>
    </Container>
    
    </div>
  );
  Profil.propTypes={
    name : propTypes.string.isRequired,
    }
};


export default Profil;

import React from 'react'
import Profilepic from '../assets/images/pp2.png'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const About = () => {
    return (

        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <hr className="hr1" />
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profilepic} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hello, I am Samar Jeet Borah
                                <br />A passionate programmer, a learner and a leader, born and brought up in India. I am a Full Stack Web Developer with React.js, Redis, Express.js, Angular 4 and above, Node.js, MSSQL, Mongodb, Oracle, Azure and AWS as my tech stack.
                        <br />
                        In 2018, I successfully completed my Master of Computer Application degree from Tezpur Central University.
                        <br />
                        Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.

                        <br />I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                        <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1kd45FCTnjhI3H8Fz788YP8-fyj8ZCwg5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/samarjeetb0" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/samar-jeet-borah-934010145" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default About



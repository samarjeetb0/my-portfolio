import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
    return (
        <div id="contact">
          <h1 className="pt-3 text-center font-details pb-3">Contact Me</h1>
          <hr className="hr1" />
          <Jumbotron className="contact-jumbotron" style={{backgroundColor: "transparent"}}>
            <Row>
              <Col className="d-flex justify-content-center flex-wrap">
                <div className="m-2">
                  <a href="mailto:samarjeetb0@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-danger" title="samarjeetb0@gmail.com">
                      <i className="fas fa-envelope-square"></i> Email Me
                    </Button>
                  </a>
                </div>
                <div className="m-2">
                  <a href="https://www.linkedin.com/in/samar-jeet-borah-934010145" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Visit my LinkenIn">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </Button>
                  </a>
                </div>
                
                <div className="m-2">
                  <a href="https://github.com/samarjeetb0" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-dark" title="My other projects">
                      <i className="fab fa-github-square"></i> GitHub
                    </Button>
                  </a>
                </div>
                
                {/* <div className="m-2">
                  <a href="https://twitter.com/akjha96" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-info" title="Tweets are welcomed!">
                      <i className="fab fa-twitter"></i> Twitter
                    </Button>
                  </a>
                </div> */}
                
              </Col>
            </Row>
          </Jumbotron>
        </div>
      );
}

export default Contact

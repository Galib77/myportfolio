import React from 'react'
import { Row, Col, Jumbotron, Button  } from 'react-bootstrap'

import './contact.css'

const Contact = () => {
    return (
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
            <Row>
            <Col className="d-flex justify-content-center flex-wrap">
                <div className="m-2">
                <a href="mailto:akjha96@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-danger" title="akjha96@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                    </Button>
                </a>
                </div>
                
                <div className="m-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                    <i class="fab fa-youtube"></i> Youtube
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                    </Button>
                </a>
                </div>
                <div className="m-2">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                    </Button>
                </a>
                </div>
            </Col>
            </Row>
        </Jumbotron>
    </div>
    )
}

export default Contact

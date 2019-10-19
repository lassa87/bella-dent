import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

class Footer extends Component {
    render() {
        return (
            <div className="footerContent">
                <Row>
                    <Col className="align-self-center">
                        <div className="contactInfo ">
                            <p>
                                BELLA-DENT STUDIO<br />
                                ul. Generala Tranijea 8/1<br />
                                18000 Niš<br />
                                tel: +381 69 3701097
                            </p>
                        </div>
                    </Col>
                    <Col className="align-self-center">
                        <h4>RADNO VREME:</h4>
                        <p>
                            A
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.918687237951!2d21.89695575895746!3d43.31932786648763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0b6cf5ff293%3A0x94bde0a94571ddff!2sBella%20Dent%20Studio%20Stomatoloska%20Ordinacija!5e0!3m2!1sen!2srs!4v1570794949052!5m2!1sen!2srs" width="100%"></iframe>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Footer

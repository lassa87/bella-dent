import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Logo from '../assets/images/logo WEB.png'
import NavigationMeny from './Nav'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row id="HeaderMeny">
                        <Col lg="2" md="3" xs="4">
                            <Link to="/">
                                <div>
                                    <img src={Logo} alt="bella-dent" width="100%"></img>
                                </div>
                            </Link>
                        </Col>
                        <Col className="align-self-center">
                            <NavigationMeny />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header
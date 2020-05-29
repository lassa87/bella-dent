import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import imp from '../assets/images/imp.jpg'
import St from '../assets/images/st.jpg'
import St1 from '../assets/images/st1.jpg'
import St2 from '../assets/images/st5.jpg'
import St3 from '../assets/images/st3.jpg'
import St4 from '../assets/images/st4.jpg'
import St5 from '../assets/images/st2.jpg'
import { Link } from 'react-router-dom'

class ImgMeny extends Component {

    render() {
        return (
            <Container>

                <Row className="mt-2">
                    <Col md='6'>
                        <div id="1" className="imageContainer m-2">
                            <img src={St4} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Konzervativna stomatologija</h3>
                                    - Plombiranje zuba porcelanskim inlejima <br />
                                    - Plombiranje zuba savremenim kompozitnim materijalima <br />
                                    - Plombiranje zuba amalgamom (siva plomba) <br />
                                    - Lečenje kanala korena zuba<br />
                                <Link to="/Konzervativna">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>

                    </Col>
                    <Col md='6'>
                        <div id="2" className="imageContainer m-2">
                            <img src={St2} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Estetska stomatologija</h3>
                                    - Beljenje zuba <br />
                                    - Ugradnja nakita cirkona <br />
                                <Link to="/Estetska">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <div id="3" className="imageContainer m-2">
                            <img src={St1} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Protetika</h3>
                                    - Izrada proteza <br />
                                    - Izrada livenih nadogradnji <br />
                                    - Izrada bezmetalnih krunica <br />
                                    - Izrada cirkonijumskih krunica <br />
                                    - Izrada nadoknada na implantatima <br />
                                <Link to="/Protetika">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div id="4" className="imageContainer m-2">
                            <img src={St3} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Paradontologija</h3>
                                    - Uklanjanje kamenca <br />
                                    - Uklanjanje mekih naslaga <br />
                                    - Terapija parodntalnih džepova <br />
                                    - Parodontalne operacije.. <br />
                                <Link to="/Paradontologija">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <div id="5" className="imageContainer m-2">
                            <img src={St} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Ortodoncija</h3>
                                    - Ortodontski specijalistički pregledi <br />
                                    - Izrada mobilnih ortodontskih aparata <br />
                                    - Izrada fiksnih ortodontskih aparata<br />
                                <Link to="/Ortodoncija">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div id="6" className="imageContainer m-2">
                            <img src={imp} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Oralna hirurgija</h3>
                                    - Vađenje zuba <br />
                                    - Nivelacija grebena <br />
                                    - Vađenje zalomljenih korenova <br />
                                    - Ugradnja impantata <br />
                                    - Zatvaranje sinusa itd <br />
                                <Link to="/Hirurgija">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <div id="7" className="imageContainer m-2">
                            <img src={St5} className="imageMeny p-2" width='100%'></img>
                            <div className="popUpText">
                                <h3>Dečija stomatologija</h3>
                                    - Zalivanje fisura <br />
                                    - Plombiranje mlečnih i stalnih zuba <br />
                                    - Fluorisanje zuba <br />
                                    - Obučavanje pravilnoj higijeni usta <br />
                                <Link to="/Decija">
                                    <Button outline color="success" size="sm">Detaljnije</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ImgMeny

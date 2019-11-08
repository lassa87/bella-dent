import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import imp from '../assets/images/imp.jpg'
import St from '../assets/images/st.jpg'
import St1 from '../assets/images/st1.jpg'
import St2 from '../assets/images/st5.jpg'
import St3 from '../assets/images/st3.jpg'
import St4 from '../assets/images/st4.jpg'
import St5 from '../assets/images/st2.jpg'
import { Link } from 'react-router-dom'
import WOW from 'wowjs'

class ImgMeny extends Component {

    componentDidMount() {
        function myFunction(x) {
            if (x.matches) { // If media query matches
                new WOW.WOW().init();
            }
        }
        var x = window.matchMedia("(max-width: 800px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

    }

    render() {
        return (
            <Container>

                <Row className="mt-2">
                    <Col md='6'>
                        <Link to="/Konzervativna">
                            <div id="1" className="imageContainer m-2">
                                <img src={St4} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Konzervativna stomatologija</h3>
                                    - Plombiranje zuba porcelanskim inlejima <br />
                                    - Plombiranje zuba savremenim kompozitnim materijalima <br />
                                    - Plombiranje zuba amalgamom (siva plomba) <br />
                                    - Lečenje kanala korena zuba
                            </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md='6'>
                        <Link to="/Estetska">
                            <div id="2" className="imageContainer m-2">
                                <img src={St2} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Estetska stomatologija</h3>
                                    - Beljenje zuba <br />
                                    - Ugradnja nakita cirkona
                            </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Link to="/Protetika">
                            <div id="3" className="imageContainer m-2">
                                <img src={St1} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Protetika</h3>
                                    - Izrada proteza <br />
                                    - Izrada livenih nadogradnji <br />
                                    - Izrada bezmetalnih krunica <br />
                                    - Izrada cirkonijumskih krunica <br />
                                    - Izrada nadoknada na implantatima
                            </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md='6'>
                        <Link to="/Paradontologija">
                            <div id="4" className="imageContainer m-2">
                                <img src={St3} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Paradontologija</h3>
                                    - Uklanjanje kamenca <br />
                                    - Uklanjanje mekih naslaga <br />
                                    - Terapija parodntalnih džepova <br />
                                    - Parodontalne operacije..
                            </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Link to="/Ortodoncija">
                            <div id="5" className="imageContainer m-2">
                                <img src={St} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Ortodoncija</h3>
                                    - Ortodontski specijalistički pregledi <br />
                                    - Izrada mobilnih ortodontskih aparata <br />
                                    - Izrada fiksnih ortodontskih aparata
                            </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md='6'>
                        <Link to="/Hirurgija">
                            <div id="6" className="imageContainer m-2">
                                <img src={imp} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Oralna hirurgija</h3>
                                    - Vađenje zuba <br />
                                    - Nivelacija grebena <br />
                                    - Vađenje zalomljenih korenova <br />
                                    - Ugradnja impantata <br />
                                    - Zatvaranje sinusa itd
                            </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Link to="/Decija">
                            <div id="7" className="imageContainer m-2">
                                <img src={St5} className="imageMeny p-2" width='100%'></img>
                                <div className="popUpText wow slideInUp" data-wow-duration="2s">
                                    <h3>Dečija stomatologija</h3>
                                    - Zalivanje fisura <br />
                                    - Plombiranje mlečnih i stalnih zuba <br />
                                    - Fluorisanje zuba <br />
                                    - Obučavanje pravilnoj higijeni usta
                            </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ImgMeny

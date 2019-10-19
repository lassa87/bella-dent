import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'
import pa1 from '../../assets/images/pav1.jpg'
import pa2 from '../../assets/images/pav2.jpg'

class Decija extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container>
                    <Row className="p-3">

                        <Col>
                            <h3 className="textCenter">Dečija stomatologija</h3>
                            <p className='textJustify'>
                                Dečija stomatologija ima za zadatak da deca steknu poverenje u stomatologa, da se podvrgnu preventivnom radu, da se izvrši pravovremeno i adekvatno lečenje.
                        </p>
                            <p className='textJustify'>
                                Dečija stomatologija obuhvata rad sa novorođenčadima, odojčadima, malom decom, decom predškolskog, školskog i srednješkolskog uzrasta, kao i sa omladinom do 18 godina, kada se završava razvitak i rast organa za žvakanje.
                        Stomatološka ordinacija „Bella-dent“ nudi kompletan tretman u grani zaštite i prevencije karijesa, prevencije nastanka određenih nepravilnosti zuba i vilica,prvencije obolenja mekih tkiva.</p>
                        </Col>
                        <Col md="5">
                            <img src={pa1} width='100%' />
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter'>Fluorisanje zuba</h3>
                            <p className='textJustify'>Se u ordinaciji „Dental “ vrši specijalnim sredstvima koja se nanose na zube, tretman traje 30 minuta i radi se dva puta godišnje. Sredstva koja se piju moraju biti ordinirana od strane stomatologa jer postoji vremenski period i doze kada se koriste.</p>
                            <h3 className='textCenter'>Zalivanje fisura</h3>
                            <p className='textJustify'>Je potpuno bezbolan tretman koji obezbeđuje zaštitu od karijesa na određenim predilekcionim mestima zuba – u fisurama zuba svih mlečnih I stalni pretkutnjaka I kutnjaka.
                            Praćenje smene zuba</p>
                            <p className='textCenter'>Pod budnim okom naših doktora prati se smena zuba, blagovremeno se može otkriti bilo koja anomalija i na vreme terapijski reagovati.</p>


                        </Col>
                        <Col md="5">
                            <img src={pa2} width='100%' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Decija
import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'
import sn1 from '../../assets/images/nakit.jpg'
import si1 from '../../assets/images/izbeljivanje.jpg'

class Estetska extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container className='contentBackground'>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter title'>Estetska stomatologija</h3>
                            <h4 className='textCenter title'>Beljenje zuba</h4>
                            <p>
                                Beljenje zuba je najbrži i najlakši način da unapredite svoj izgled i dodate malo sjaja u Vaš osmeh. To je potpuno bezbedan i krajnje jednostavan postupak. Sa beljenjem zuba, boja gleđi je svetlija, a zubi izgledaju mlađe i sjajnije.
                            </p>
                        </Col>
                        <Col md="5">
                            <img src={si1} width='100%' />
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            <h4 className='textCenter title'>Zubni nakit</h4>
                            <p>
                                Zubni nakit je brilijantan način da ugradite iskrice u vaš osmeh i razlikujete se od drugih .Za vreme jedne bezbolne procedure, stomatolog fiksira zubni nakit na prednju površinu gornjih zuba. Ova procedura je totalno neinvazivna, te nema nikakvog oštećenja zubne supstance i bilo kakvih neželjenih efekata. Zubni nakit možete u svakom trenutku skinuti, menjati ga kao bilo koji komad nakita, bez ikakvih posledica, potreban je samo vaš dolazak u ordinaciju.
                            </p>
                        </Col>
                        <Col md="5">
                            <img src={sn1} width='100%' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Estetska
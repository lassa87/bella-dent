import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'
import f1 from '../../assets/images/FIKSNI.jpg'
import f11 from '../../assets/images/FIKSNI2.jpg'

class Ortodoncija extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container className='contentBackground'>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter title'>Ortodoncija</h3>
                            <h4 className='textCenter title'>Mobilni ortodonski aparati</h4>
                            <p>
                                Mobilni ortodontski aparat se preporučuje pacijentima sa mlečnom ili mešovitom denticijom. Mobilna proteza se sastoji od akrilatnog dela i metalne žice u obliku luka ili kukica. Ovaj tip aparata se nosi noću i nekoliko sati tokom dana, a korisnici su uglavnom deca.
                            </p>
                        </Col>
                        <Col md="5">
                            <img src={f1} width='100%' />
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            <h4 className='textCenter title'>Fiksni ortodonski aparati</h4>
                            <p>
                                Fiksni ortodontski aparati se koriste u svhu ispravljanja nepravilnog zagrižaja. Nepravilnosti zagrižaja mogu uticati na funkciju žvakanja, govora i na kraju na izgled osmeha. Fiksni ortodontski aparat se sastoji od bravica koje se postavljaju na zube i luka koji povezuje sve bravice. Fiksni ortodontski aparati se ne uklanjaju do kraja terapije. Dok se koriste, opalna higijena mora biti besprekorna.
                            </p>
                        </Col>
                        <Col md="5">
                            <img src={f11} width='100%' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Ortodoncija
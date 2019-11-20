import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'
import pl from '../../assets/images/pl1.jpg'

class Konzervativna extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container className='contentBackground'>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter title'>Konzervativna stomatologija</h3>
                            <h4 className='textCenter title'>Plombe</h4>
                            <p>
                                Estetski (beli) kompozitni ispuni su idealno rešenje ako želite postići potpuno prirodni izgled zuba nakon oštećenja.Upotrebljavaju se u slučajevima kada nije potrebna velika obnova zubnog tkiva, a izrađuju se u ordinaciji tokom jedne posete.Najčešće su rešenje kada dođe do restauracije zubne površine kako bi se izlečio zub i očuvala estetika osmeha.
                        </p>
                            <p>
                                Estetski ispuni, poznatije i kao bele plombe, su zubne plombe koje obnavljaju i oponašaju prirodan izgled strukture zuba.Osim što obnavljaju zube koji su napukli ili propali, bele plombe mogu se upotrebljavati u kozmetičke svrhe za promjenu veličine, boje i oblika zubi.Posebno su korisne pri zatvaranju praznina među zubima, popravljanju okrnjenih zuba i davanju ujednačenijeg i ravnijeg izgleda zuba.
                        </p>
                        </Col>
                        <Col className="pt-3" md="5">
                            <img src={pl} width="100%" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Konzervativna
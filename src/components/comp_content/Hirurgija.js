import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'

class Hirurgija extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container className='contentBackground'>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter title'>Oralna hirurgija</h3>
                            <p>
                                Savremena stomatologija odgovarajućim hiruškim postupcima i primenom lokalne anestezije, omogućava bezbolne oralno-hiruške intervencije sa minimalnom traumom okolnih tkiva i retkim postoperativnim komplikacijama.
                            </p>
                            <h4 className='textCenter title'>Usluge koje nudimo iz ove oblasti:</h4>
                            <p>
                                - Vađenje zuba <br />
                                - Vađenje impaktiranih zuba <br />
                                - Operacije cisti i granuloma <br />
                                - Nivelacija grebena <br />
                                - Produbljivanje forniksa <br />
                                - Uklanjanje plika, frenuloma <br />
                                - Vađenje zalomljenih korenova <br />
                                - Ugradnja impantata <br />
                                - Zatvaranje sinusa
                            </p>
                        </Col>
                        <Col md="5">
                            {/* <img src={f11} width='100%' /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Hirurgija
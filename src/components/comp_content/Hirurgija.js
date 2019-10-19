import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'

class Hirurgija extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container>
                    <Row>
                        <Col md="3" xs="4">
                            SLIKE
                        </Col>
                        <Col>
                            <h3 className='textCenter'>Oralna hirurgija</h3>
                            <p className='textCenter'>
                                Savremena stomatologija odgovarajućim hiruškim postupcima i primenom lokalne anestezije, omogućava bezbolne oralno-hiruške intervencije sa minimalnom traumom okolnih tkiva i retkim postoperativnim komplikacijama.
                            </p>
                            <h4 className='textCenter'>Usluge koje nudimo iz ove oblasti:</h4>
                            <p className='textCenter'>
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
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Hirurgija
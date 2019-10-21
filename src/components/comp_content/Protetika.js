import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'
import pr1 from '../../assets/images/protetika1.jpg'
import pr2 from '../../assets/images/protetika21.jpg'
import pr3 from '../../assets/images/protetika22.jpg'

class Protetika extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter'>Protetika</h3>
                            <h4 className='textCenter'>Proteze (parcijalne i totalne)</h4>
                            <p className='textCenter'>
                                Totalne proteze se izrađuju u slučaju potpune bezubosti, dok kod pacijenata koji su sačuvali manji broj zuba, rešenje predstavljaju parcijalne proteze. Parcijalne proteze se vezuju za preostale zube pomoću kukica ili atačmena.
                        <br />
                                Parcijalna skeletirana (vizil)  proteza je kvalitetnije rešenje jer osim veće izdržljivosti zbog metalnog skeleta, pacijentu pruža i veći komfor zbog manje površine dela proteze koji se naslanja na meka tkiva ( nepce, podjezični predeo). Na taj način je smanjen osećaj stranog tela u ustima. Sve proteze se izrađuju u vrlo kratkom roku.
                        </p>
                        </Col>
                        <Col md="5">
                            <img src={pr1} width='100%' />
                        </Col>
                    </Row>

                    <Row className="p-3">
                        <Col>
                            <h4 className='textCenter'>FIKSNA PROTETIKA</h4>
                            <p className='textCenter'>
                                Fiksna protetika je proces koji predstavljaju nadoknade koje se trajno cementiraju na postojeće zube. Nadoknađuju destrukcije prirodne krune zuba, nastale usled velikih karijesnih lezija i trauma. Mogu poslužiti i kao estetsko preoblikovanje postojećih zuba ukoliko pacijenti nisu zadovoljni sa bojom, oblikom, veličinom ili položajem.
                        </p>
                            <h4 className='textCenter'>METALOKERAMIČKE KRUNICE I MOSTOVI</h4>
                            <p className='textCenter'>
                                Fiksne nadoknade izrađene od metala i keramike. Mogu biti sa rubom u metalu ili u keramici što je estetski lepše.Nakon brušenja zuba, uzima se otisak i tehničar u laboratoriji izrađuje krunice.
                        </p>
                            <h4 className='textCenter'>BEZMETALNE (KERAMIČKE) KRUNICE</h4>
                            <p className='textCenter'>
                                Cirkonijum-dioksid i Litijum-disilikat su materijali koji su poslednjih nekoliko godina napravili istinsku revoluciju u stomatologiji. Osnovne karakteristike ovih materijala su prelamanje svetlosti i transparencija koja je vrlo slična prirodnom zubu. Pored ovoga, ove materijale karakteriše i izuzetna mehanička otpornost koja je na nivou ranije korištenog metala. Dok se istovremeno postiže odličan estetski efekat zahvaljujući keramici na površini. Osim visoke izdržljivosti i odlične estetike, ove nadoknade su i finansijski povoljne pa predstavljaju i najčešći izbor pacijenata.
                        </p>
                        </Col>
                        <Col md="5" className="textCenter">
                            <img className="p-3" src={pr2} width='80%' />
                            <img className="p-3" src={pr3} width='80%' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Protetika
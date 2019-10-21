import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from '../Carusel'

class Paradontologija extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Container>
                    <Row className="p-3">
                        <Col>
                            <h3 className='textCenter'>Paradontologija</h3>
                            <h4 className='textCenter'>Usluge koje pružamo iz ove oblasti:</h4>
                            <p className='textCenter'>
                                - Uklanjanje kamenca <br />
                                - Parodontalne operacije <br />
                                - Uklanjanje mekih naslaga <br />
                                - Terapija parodontalnih džepova
                            </p>
                            <h4 className='textCenter'>Paradontopatija</h4>
                            <p className='textCenter'>
                                Parodontopatija je hronično oboljenje desni u uznapredovaloj fazi. Paradentoza je oboljenje potpornog aparata zuba (parodoncijuma), koje, ukoliko se ne leči, u svom poslednjem stadijumu dovodi do vidljivog povlačenja gingive, rasklaćenja i ispadanja zuba.
                        </p>
                            <p className='textCenter'>
                                Oboljenje počinje čestim zapaljenjem desni i krvarenjem tokom pranja zuba. Zatim dolazi do povlačenja desni i ogolićenja vratova zuba, te zubi izgledaju duži. Između zuba nastaju parodontalni džepovi u koje zapada hrana, stanje se pogoršava, pa vremenom dolazi do rasklaćenja zuba i njihovog gubitka. Da bi se sve ovo sprečilo, potrebno je dobro održavati oralnu higijenu i lečiti oboljenje kada je još u početnom stadijumu. Lečenje kao prvo podrazumeva specijalno čišćenje zuba i njihovog potpornog aparata, primenu različitih medikamenata (sistemski i lokalno), a nekada je neophodna i hirurška intervencija/terapija.Oboljenje desni može trajati godinama, bez bolova i neprimetno, što je nažalost, veoma često, razlog kasnog odlaska kod stomatologa, tj. u uznapredovaloj fazi bolesti.
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
export default Paradontologija
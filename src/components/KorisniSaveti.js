import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Saveti extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3 className='textCenter'>Korisni saveti</h3>
                        <p className='textCenter'>
                            <b>Osetljivi zubi </b>
                            Veliki broj ljudi često ima problem sa osetljivim zubima.
                            Osećaju bol na različite nadražaje: hladno, toplo, kiselo ili slatko. <br />
                            <b>Prekomernu osetljivost zuba mogu izazvati </b>
                            nepravilno pranje zuba, korišćenje suviše tvrde četkice koja može oštetiti gleđ.
                            Povlačenje desni sa vrata zuba. Škripanje zubima ili prejako stiskanje zuba može
                            izbiti delove gleđi sa slabijih mesta i tako izazvati pojačanu osetljivost zuba. <br />
                            <b>Neprijatan zadah </b>
                            može prouzrokovati veliki broj faktora. Mi Vam može pomoći da otkrijete uzrok i
                             ukoliko je vezan za usta, odredimo odgovarajuću terapiju i dovedemo do izlečenja.
                            Dobra higijena i redovni pregledi jedini su način osiguranja zdravlja Vaših zuba.
                            Prilikom pregleda provjerava se i zdravlje usne šupljine.
                            Zubi se proveravaju za utvrđivanje nastanka karijesa, zubnog kamenca, paradontoze
                            dok se u usnoj šupljni mogu na vrijeme otkriti i bolesti poput dijabetesa, avitaminoze.
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Saveti
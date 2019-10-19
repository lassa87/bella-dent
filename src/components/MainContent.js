import React, { Component } from 'react'
import Saveti from './KorisniSaveti'
import ImgMeny from './ImgMeny'

class Mcontent extends Component {
    render() {
        return (
            <div>
                <ImgMeny />
                <Saveti />
            </div>
        )
    }
}

export default Mcontent
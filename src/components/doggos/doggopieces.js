import React from 'react'
import { Col, CardPanel } from 'react-materialize';
import images from '../../doggopieces.json'
import './doggopieces.css'

//const images = require('../../doggopieces.json');

const doggopieces = props => (
    <Col s={12} m={4} l={3}>
        <CardPanel onClick={() => props.clickHandler(props.icon.iconName)} className={"hoverable teal lighten-4 black-text center" + (props.correct === false ? " shake" : "")}>
            <images icon={props.icon} />
        </CardPanel>
    </Col>
)

export default doggopieces

import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import images from './doggopieces.json'
import Doggopieces from './components/doggos';
import Nav from './components/Nav';
import doggopieces from './components/doggos/doggopieces';

class App extends Component {
    state = {
        image: [].sort(this.randomize),
        clicked: [],
        score: 0,
        highScore: 0,
        correct: undefined,
        gameWon: false
    }

    randomize = (a, b) => Math.random() > .5 ? -1 : 1

    clickHandler = imageName => {
        if (this.state.clicked.indexOf(imageName) === -1) {
            let score = this.state.clicked.length + 1,
                clicked = score === this.state.image.length ? [] : [...this.state.clicked, imageName]

            this.setState({
                image: this.state.image.sort(this.randomize),
                clicked: clicked,
                score: score,
                highScore: Math.max(this.state.highScore, score),
                correct: true,
                gameWon: score === this.state.image.length
            })
        } else {
            this.setState({
                image: this.state.image.sort(this.randomize),
                clicked: [],
                score: 0,
                correct: false,
                gameWon: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Nav correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore} />
                    <Row>
                        <Col s={12}>
                            <CardPanel>
                                <p>Click on a good boy to earn points, but don't click on one good boy more than once! Each good boy gets one click.</p>
                            </CardPanel>
                        </Col>
                    </Row>
                </div>
                <div className="container">
                    <Row>
                        {this.state.image.map(icon => <doggopieces correct={this.state.correct} key={icon.imageName} icon={icon} clickHandler={this.clickHandler} />)}
                    </Row>
                </div>
            </div>
        )
    }
}
export default App
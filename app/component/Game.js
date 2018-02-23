import React from 'react'
import Board from 'Board'
import Header from 'Header'

class Info extends React.Component {
    render () {
        return (
            <div className="game-info">
                <div></div>
                <ol></ol>
            </div>
        );
    }
}

export default class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <Header name="aa" />
                <Board />
                <Info  />
            </div>
        );
    }
}
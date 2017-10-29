import React from 'react'
import ReactDOM from 'react-dom'

function Square(props) {
    const style = {
        btn: {
            outline: '0px',
            padding: '5px',
            background: '#FFF',
            border: '1px solid #CCC',
            width: 100/3 + '%',
            height: '100px',
            position: 'relative'
        },
        span: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        hover: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            fontSize: '2rem',
            color: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
    return (
        <button className="square" 
                onClick={props.onClick} 
                onMouseOver={props.onMouseOver} 
                onMouseOut ={props.onMouseOut}
                style={style.btn}>
            <span style={style.span}>{props.value}</span>
            <span style={style.hover}>{props.hoverState?props.tmpVal:''}</span>
        </button>
    );
}

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            count: 0,
            hoverSq: Array(9).fill({value: null, hover: false})
        };
    }
    renderSquare (i) {
        return <Square key        = {i} 
                       value      = {this.state.squares[i]}
                       tmpVal     = {this.state.hoverSq[i].value}
                       hoverState = {this.state.hoverSq[i].hover}
                       onClick    = {this.handleClick(i)} 
                       onMouseOver  = {this.hdlMsEnter(i)} 
                       onMouseOut   = {this.hdlMsLeave(i)} 
                />
    }
    renderSquares () {
        let squares = [];
        for(let i=0; i<9; i++) {
            squares.push(this.renderSquare(i))    
        }
        return squares
    }
    handleClick (i) {
        const _squares = this.state.squares.slice();
        const _hoverSq = this.state.hoverSq.slice();
        if (calcWinner(_squares) || _squares[i]) return;
        _squares[i] = this.state.xIsNext?'X':'O';
        _hoverSq[i] = { 
            value: null,
            hover: false
        }
        return ()=>this.setState({
            squares: _squares,
            xIsNext: !this.state.xIsNext,
            count: this.state.count + 1,
            hoverSq: _hoverSq            
        })
    }

    hdlMsEnter (i) {
        const _squares = this.state.squares.slice();
        const _hoverSq = this.state.hoverSq.slice();
        if (calcWinner(_squares) || _squares[i]) return;
        _hoverSq[i] = { 
            value: this.state.xIsNext?'X':'O',
            hover: true
        }
        return ()=>this.setState({
            hoverSq: _hoverSq
        })
    }
    hdlMsLeave (i) {
        const _squares = this.state.squares.slice();
        const _hoverSq = this.state.hoverSq.slice();
        if (calcWinner(_squares) || _squares[i]) return;
        _hoverSq[i] = { 
            value: null,
            hover: false
        }
        return ()=>this.setState({
            hoverSq: _hoverSq
        })
    }

    style() {
        return {
            width: '300px'
        }
    }

    render () {
        const winner = calcWinner(this.state.squares);
        const count = this.state.count;
        let status;
        if(winner) {
            status = '贏家是' + winner;
        } else if(count == 9) {
            status = '不分勝負';
        } else {
            status = '下一個玩家是：' + (this.state.xIsNext?'X':'O')
        }

        return (
            <div className="game-board" style={this.style()}>
                <p>{status}</p>
                { this.renderSquares() }
            </div>
        )
    }
}

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

class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <Board />
                <Info  />
            </div>
        );
    }
}

function calcWinner (squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i=0;i<lines.length;i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(
    <Game />,
    document.getElementById('app')
);
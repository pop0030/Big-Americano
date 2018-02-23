import React from 'react'
export default function Square(props) {
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
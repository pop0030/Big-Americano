import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: 5px 10px;
    margin: 8px;
    appearance: none;
    cursor: pointer;
    background: #fefefe;
    color: #333;
    border: 1px solid #eee;
    border-radius: 2px;
    font-size: 13px;
    transition: all 0.2s;

    &:hover {
        background: #222;
        color: #fff;
    }
`;

class Button extends React.Component {
    render() {
        return (
            <Input 
                value={this.props.text}
                className={this.props.class}
                type="button"
                onClick={this.props.onClick}
            />
        );
    }
}



export default Button
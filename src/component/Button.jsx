import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: 5px 10px;
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
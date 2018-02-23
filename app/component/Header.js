import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    padding: 8px;
    position: fixed;
    top: 0;
    left: 0;
    background: #eee;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    z-index: 2;
`;

class HeaderComponent extends React.Component{
    render () {
        return (
            <Header id="header" >{this.props.name}</Header>
        );
    }
}

export default HeaderComponent
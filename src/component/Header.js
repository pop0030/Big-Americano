import React from 'react'
import styled from 'styled-components'

const HeadNav = styled.header`
    width: 100%;
    padding: 8px;
    background: #eee;
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
`;


class Header extends React.Component{
    render () {
        return (
            <HeadNav className="header" >{this.props.name}</HeadNav>
        );
    }
}

export default Header
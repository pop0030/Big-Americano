import React from 'react'
import style from './Header.styl'

class Header extends React.Component{
    render () {
        return (
            <header className="header">{this.props.name}</header>
        );
    }
}

export default Header
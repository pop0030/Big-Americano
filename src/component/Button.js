import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <input 
                value={this.props.text}
                className={this.props.class}
                type="button"
                onClick={this.props.onClick}
            />
        );
    }
}

export default Button
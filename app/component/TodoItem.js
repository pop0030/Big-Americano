import React from 'react'
import Button from 'Button.jsx'
class TodoItem extends React.Component {
    render () {
        return (
            <li 
                className={this.props.completed?'done':'undo'}>
                <Button
                    text={this.props.text}
                    onClick={this.props.onClick}
                />
            </li>
        );
    }
}
export default TodoItem
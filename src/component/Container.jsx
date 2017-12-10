import React from 'react'
import Button from 'Button.jsx'

class Container extends React.Component{
    render () {
        return <div>
            <p>{"container"}</p>
            <div>
                <Button text="save" />
            </div>
        </div>
    }
}

export default Container
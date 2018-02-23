import React from 'react'
import styled from 'styled-components'

const LeftNav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    overflow-x: hidden;
    overflow-y: auto;
`
const ListGroup = styled.ul`
    padding: 0;
    margin: 0;
`
const ListItem = styled.li`
    list-style: none;
    display: block;
    padding: 8px;
    cursor: pointer;
    &:hover{
        background-color: #ddd;
    }
`

let lists = []
for(let i=0;i<30;i++){
    lists.push({key:i, label:`EP Link${i}`})
}

class LeftNavComponent extends React.Component{
    renderListItem (list) {
        const clickNav = this.props.clickNav;
        return <ListItem 
            key={list.key} 
            onClick={() => clickNav('hi')}>
                {list.label}
            </ListItem>
    }
    render () {
        return (
            <LeftNav>
                <ListGroup>
                    {lists.map(list => this.renderListItem(list))}
                </ListGroup>
            </LeftNav>
        );
    }
}

export default LeftNavComponent
import React from 'react'
import styled from 'styled-components'
import LeftNav from '../container/contaierLeftNav'
import PageView from 'PageView.jsx'

const Container = styled.div`
    height: calc(100% - 30px);
    position: relative;
    margin-top: 30px;
    >div{
        height: 100%;
        border: 1px solid #ddd;
    }
`

class ContainerComponent extends React.Component{
    render () {
        return (
            <Container>
                <PageView></PageView>
                <LeftNav></LeftNav>
            </Container>
        );
    }
}

export default ContainerComponent
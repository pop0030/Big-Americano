import React from 'react'
import styled from 'styled-components'

const PageView = styled.div`
    width: 100%;
    padding-left: 180px;
    overflow: auto;
`

class PageViewComponent extends React.Component {
    render () {
        return <PageView>內容</PageView>
    }
}

export default PageViewComponent
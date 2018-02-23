import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Container from '../component/Container'
import AddTodo from '../container/AddTodo'
import VisibleTodoList from '../container/VsbList'

const App = () => (
  <div id="viewport">
    <Header name="header" />
    <Container />
  </div>
)

export default App
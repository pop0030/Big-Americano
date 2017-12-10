import React from 'react'
import ReactDOM from 'react-dom'
//import Game from 'Game.js'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import App from './pages/App'
import 'normalize.css'

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
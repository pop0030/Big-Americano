import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import App from './pages/App'
import 'normalize.css'
import 'common/css/main.styl'

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
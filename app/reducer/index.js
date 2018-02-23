import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './vsbFilter'
import popupRED from './popup.js'

const todoApp = combineReducers({
	  todos,
	  popupRED,
  	  visibilityFilter
})

export default todoApp
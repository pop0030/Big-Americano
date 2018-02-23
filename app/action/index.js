let nextTodoId = 0
export const addTodo = (text) => {
	return {
    	type: 'ADD_TODO',
    	id: nextTodoId++,
    	text
  	}
}

export const setVsbFilter = (filter) => {
  	return {
    	type: 'SET_VISIBILITY_FILTER',
    	filter
  	}
}

export const toggleTodo = (id) => {
  	return {
   		type: 'TOGGLE_TODO',
    	id
  	}
}

export const popupAlert = (msg) => {
	return {
		type: 'POPUP_ALERT',
		msg
	}
}
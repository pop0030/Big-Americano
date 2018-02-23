const popup = (state = [], action) => {
	switch (action.type) {
    	case 'POPUO_ALERT':
			return action.msg
			break
      	default:
			return state
			break
    }
}

export default popup
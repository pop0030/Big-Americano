import { connect } from 'react-redux'
import { popupAlert } from '../action'
import LeftNav from '../component/LeftNav'

const mapClick = (dispatch) => {
    return {
    	clickNav: (msg) => {
            dispatch(popupAlert(msg))
        }
    }
}

const containerLeftNav = connect(
	mapClick
)(LeftNav)

export default containerLeftNav
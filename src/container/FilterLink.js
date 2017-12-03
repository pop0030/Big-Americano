import { connect } from 'react-redux'
import { setVsbFilter } from '../action'
import Link from '../component/Link'

const mapStateToProps = (state, ownProps) => {
    return {
    	active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  	return {
    	onFilterClick: () => {
      		dispatch(setVsbFilter(ownProps.filter))
    	}
  	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink
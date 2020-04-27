import { connect } from 'react-redux'
import MainPage from './main_page'

const mapStateToProps = (state, ownProps) => ({
    leagues: state.entities.leagues,
    currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
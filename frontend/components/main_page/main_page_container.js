import { connect } from 'react-redux'
import MainPage from './main_page'


const mapStateToProps = (state, ownProps) => ({
    leagues: state.entities.leagues,
    currentUserId: state.session.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);
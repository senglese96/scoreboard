import { connect } from 'react-redux'
import Navbar from './navbar'
import {logout} from '../../actions/session_actions'

const mapStateToProps = state => ({
    loggedIn: !!(state.session.id)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)
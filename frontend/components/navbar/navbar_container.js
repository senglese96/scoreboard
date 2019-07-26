import { connect } from 'react-redux'
import Navbar from './navbar'

const mapStateToProps = state => ({
    loggedIn: !!(state.session.id)
})

export default connect(
    mapStateToProps,
    null
)(Navbar)
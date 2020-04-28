import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchLeagues } from '../../actions/league_actions';

const mapStateToProps = (state, ownProps) => ({
    leagues: state.entities.leagues,
    currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchLeagues: () => dispatch(fetchLeagues())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
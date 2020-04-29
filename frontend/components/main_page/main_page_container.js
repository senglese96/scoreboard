import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchLeagues } from '../../actions/league_actions';
import { ownedLeagues } from '../../selectors/league_selectors';

const mapStateToProps = (state, ownProps) => ({
    leagues: state.entities.leagues,
    currentUserId: state.session.id,
    ownedLeagues: ownedLeagues(state.session.id, state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchLeagues: () => dispatch(fetchLeagues())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
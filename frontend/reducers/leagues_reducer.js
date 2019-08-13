import {
    RECEIVE_LEAGUES,
    RECEIVE_LEAGUE,
    REMOVE_LEAGUE,
} from '../actions/league_actions';
import merge from 'lodash/merge'

const leaguesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_LEAGUES:
            return action.data
        case RECEIVE_LEAGUE:
            let newState = merge({}, state, { [action.data.league.id]: action.data.league })
            return newState
        case REMOVE_LEAGUE:
            let someState = merge({}, state)
            delete someState[action.leagueId]
            return someState
        default:
            return state
    }
}

export default leaguesReducer;
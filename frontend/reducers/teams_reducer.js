import {RECEIVE_LEAGUE} from '../actions/league_actions'
import { RECEIVE_TEAM } from '../actions/team_actions'
import merge from 'lodash/merge'

const teamsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_LEAGUE:
            return action.data.teams
        case RECEIVE_TEAM:
            return Object.assign({}, state, { [action.team.id]: action.team })
        default:
            return state
    }
}

export default teamsReducer
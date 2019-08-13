import { RECEIVE_LEAGUE } from '../actions/league_actions'
import merge from 'lodash/merge'

const gamesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_LEAGUE:
            return action.data.games
        default:
            return state
    }
}

export default gamesReducer
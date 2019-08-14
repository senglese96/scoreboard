import { RECEIVE_LEAGUE } from '../actions/league_actions'
import { RECEIVE_GAME } from '../actions/game_actions'
import merge from 'lodash/merge'

const gamesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_LEAGUE:
            return action.data.games
        case RECEIVE_GAME:
            return Object.assign({}, state, { [action.game.id]: action.game })
        default:
            return state
    }
}

export default gamesReducer
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_LEAGUE } from '../actions/league_actions'
import merge from 'lodash'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_LEAGUE:
            return action.data.users
        default:
            return state
    }
}

export default usersReducer;
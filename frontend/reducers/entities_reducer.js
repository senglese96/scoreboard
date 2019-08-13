import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import leaguesReducer from './leagues_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    leagues: leaguesReducer,
    games: gamesReducer,
    teams: teamsReducer
})

export default entitiesReducer
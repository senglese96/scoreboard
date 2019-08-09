import * as APIUtil from '../util/league_api_util'

export const RECEIVE_LEAGUE = 'RECEIVE_LEAGUE'
export const REMOVE_LEAGUE = 'REMOVE_LEAGUE'
export const RECEIVE_LEAGUES = 'RECEIVE_LEAGUES'

const receiveLeague = data => ({
    type: RECEIVE_LEAGUE,
    data
})

const removeLeague = leagueId => ({
    type: REMOVE_LEAGUE,
    leagueId
})

const receiveLeagues = data => ({
    type: RECIEVE_LEAGUES,
    data
})

export const fetchLeagues = () => dispatch =>{
    APIUtil.fetchLeagues()
        .then(data => dispatch(receiveLeagues(data)))
}

export const fetchLeague = (leagueId) => dispatch => {
    APIUtil.fetchLeague(leagueId)
        .then(data => dispatch(receiveLeague(data)))
}

export const createLeague = (league) => dispatch => {
    APIUtil.createLeague(league)
        .then(data => dispatch(receiveLeague(data)))
}

export const updateLeague = (league) => dispatch => {
    APIUtil.updateLeague(league)
        .then(data => dispatch(receiveLeague(data)))
}


export const deleteLeague = leagueId => dispatch => {
    APIUtil.deleteLeague(leagueId)
        .then(leagueId => dispatch(removeLeague(leagueId)))
}


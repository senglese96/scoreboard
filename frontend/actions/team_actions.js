import * as APIUtil from '../util/team_api_util'

export const RECEIVE_TEAM = 'RECEIVE_TEAM'

const recieveTeam = team => ({
    type: RECEIVE_TEAM,
    team
})

export const createTeam = team => dispatch => {
    APIUtil.createTeam(team)
        .then(team => dispatch(recieveTeam(team)))
}
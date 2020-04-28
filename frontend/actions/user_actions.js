import * as APIUtil from '../util/user_api_util';

const RECEIVE_COMPETING_LEAGUES = 'RECEIVE_COMPETING_LEAGUES';
const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

const receiveCompetingLeagues = leagues => ({
  type: RECEIVE_COMPETING_LEAGUES,
  leagues
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const fetchCompetingLeagues = userId => {
  return APIUtil.fetchCompetingLeagues(userId)
}
import * as APIUtil from '../util/game_api_util'

export const RECEIVE_GAME = 'RECEIVE_GAME'

const recieveGame = game => ({
    type: RECEIVE_GAME,
    game
})

export const createGame = game => dispatch => {
    APIUtil.createGame(game)
        .then(game => dispatch(recieveGame(game)))
}
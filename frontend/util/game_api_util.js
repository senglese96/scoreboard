export const createGame = game => {
    return $.ajax({
        method: 'POST',
        url: 'api/league/' + game.leagueId + '/games',
        data: game
    })
}
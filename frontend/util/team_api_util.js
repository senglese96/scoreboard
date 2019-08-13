export const createTeam = team => {
    return $.ajax({
        method: 'POST',
        url: 'api/league/' + team.leagueId + '/teams',
        data: team
    })
}
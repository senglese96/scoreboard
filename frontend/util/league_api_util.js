export const fetchLeagues = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/leagues'
    })
}

export const fetchLeague = leagueId => {
    return $.ajax({
        method: 'GET',
        url: 'api/leagues/' + leagueId
    })
}
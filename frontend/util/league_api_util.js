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

export const createLeague = league => {
    return $.ajax({
        method: 'POST',
        url: 'api/leagues',
        data: league
    })
}

export const updateLeague = league => {
    return $.ajax({
        method: 'PATCH',
        url: 'api/leagues/' + league.get("league[id]"),
        data: league
    })
}

export const deleteLeague = (leagueId) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/leagues/' + leagueId
    })
}

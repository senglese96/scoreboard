export const fetchCompetingLeagues = userId => {
  return $.ajax({
    method: 'GET',
    url: 'api/users/competing/' + userId
  });
}
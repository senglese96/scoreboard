export const ownedLeagues = (userId, state) => {
  return filter(
    Object.values(state.entities.leagues), 
    league => league.creatorId === userId
  );
}
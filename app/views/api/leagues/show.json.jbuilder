json.set! :league do
    json.partial! 'api/leagues/league', league: @league
end
json.set! :teams do
    @teams.each do |team|
        json.set! team.id do
            json.extract! team, :owner_id, :set_wins, :set_losses, :game_wins, :name, :league_id
        end
    end
end
json.set! :users do
    @members.each do |member|
        json.set! member.id do
            json.partial! 'api/users/user', user: member
        end
    end
    json.set! @creator.id do
        json.partial! 'api/users/user', user: @creator
    end
end
json.set! :games do
    @games.each do |game|
        json.set! game.id do
            json.extract! game, :winner_name, :loser_name, :loser_games, :winner_games, :id
        end
    end
end

class Api::GamesController < ApplicationController
    def create
        @game = Game.new(game_params)

        if @game.league_id == nil
            @game.league_id = params[:league_id]
        end

        if @game.save
            redirect_to api_league_url(@game.league_id)
        else
            render json: @game.errors.full_messages
        end
    end

    def update
        @game = Game.find_by(id: params[:id])

        if @game.update(game_params)
            redirect_to api_league_url(@game.league_id)
        else
            render json: "Invalid Data", status: 422
        end
    end

    def destroy
        @game = Game.find_by(id: params[:id])
        if @game
            @game.destroy

            redirect_to api_league_url(@game.league_id)
        else
            render json: 'Game Not Found', status: 404
        end
    end

    private

    def game_params
        params.require(:game).permit(:winner_name, :loser_name, :winner_games, :loser_games, :league_id)
    end
end

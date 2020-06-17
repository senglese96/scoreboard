class Api::LeaguesController < ApplicationController
    def create
        @league = League.new(league_params)

        if @league.creator_id == nil
            @league.creator_id = current_user.id
        end

        if @league.save
            redirect_to api_league_url(@league.id)
        else
            render json: @league.errors.full_messages
        end
    end

    def index
        @leagues = current_user.competing_leagues.concat(current_user.created_leagues)
        render 'api/leagues/index'
    end

    def show
        @league = League.find_by(id: params[:id])
        @teams = @league.teams == nil ? [] : @league.teams 
        @creator = @league.creator == nil ? [] : @league.creator
        @members = @league.members == nil ? [] : @league.members
        @games = @league.games == nil ? [] : @league.games
        if @league
            render 'api/leagues/show'
        else
            render json: 'No League Here', status: 404
        end
    end

    private

    def league_params
        params.require(:league).permit(:name)
    end
end
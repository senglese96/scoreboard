class Api::TeamsController < ApplicationController
    def create
        @team = Team.new(team_params)

        if @team.league_id == nil
            @team.league_id = params[:league_id]
        end

        if @team.save
            redirect_to api_league_url(@team.league_id)
        else
            render json: @team.errors.full_messages
        end
    end

    def update
        @team = Team.find_by(id: params[:id])

        if @team.update(team_params)
            redirect_to api_league_url(@team.league_id)
        else
            render json: "Invalid Data", status: 422
        end
    end

    def destroy
        @team = Team.find_by(id: params[:id])
        if @team
            @team.destroy

            redirect_to api_league_url(@team.league_id)
        else
            render json: 'Team Not Found', status: 404
        end
    end

    private

    def team_params
        params.require(:team).permit(:name, :league_id, :owner_id)
    end
end

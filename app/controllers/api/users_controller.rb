class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def competing      
        @user = User.find_by(id: params[:id])
        if @user
            @leagues = @user.competing_leagues == nil ? [] : @user.competing_leagues
            render 'api/leagues/index'
        else
            render json: 'Could not find that user', status: 404
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      get 'competing/:id', on: :collection, to: 'users#competing'
    end
    resource :session, only: [:create, :destroy]
    resources :leagues, only: [:create, :show, :index, :update, :destroy] do
      resources :teams, only: [:create, :index]
      resources :games, only: [:create, :index]
    end
    resources :teams, only: [:destroy, :update]
    resources :games, only: [:destroy, :update]
  end
end

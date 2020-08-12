Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  get "/forums", to: "homes#index"
  get '/forums/new', to: 'homes#index'
  get '/forums/:id', to: 'homes#index'
  

  namespace :api do
    namespace :v1 do
      resources :forums, only: [:index, :show, :create]
      # resource :contributions, only: [:index, :create, :destroy]
    end
  end
end

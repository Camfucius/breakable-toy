Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  get "/forums", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :forums, only: [:index]
    end
  end
end

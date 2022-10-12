Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post "/signup", to: "users#create"
  # get "/me", to: "users#show"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
  resources :users, only: [:create, :destroy ]
  resources :sessions, only: [ :destroy, :show, :create]
  get "/users/:id", to: "users#show"
  get "/users", to: "users#index"

end

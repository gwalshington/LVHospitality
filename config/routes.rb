Rails.application.routes.draw do
  resources :locations
  resources :profiles
  devise_for :users

  root to: "profiles#index"

  get '/admin', to: 'profiles#admin', as: '/admin'
  get '/map', to: 'locations#map', as: '/map'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

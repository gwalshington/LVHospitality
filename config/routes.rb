Rails.application.routes.draw do
  resources :liasons
  resources :events
  resources :locations
  resources :profiles

  devise_for :users, controllers: {registrations: "users/registrations"}

 #devise_for :users

  root to: "profiles#index"

  get '/admin', to: 'profiles#admin', as: '/admin'
  get '/guide', to: 'profiles#guide', as: '/guide'
  get '/contact', to: 'profiles#contact', as: '/contact'

  get '/map', to: 'locations#map', as: '/map'

  get '/itinerary', to: 'profiles#itinerary', as: '/itinerary'
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :tags_pieces
  resources :tags
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/pieces', to: 'pieces#index'
  resources :pieces, only: [:index, :show]
  post '/pieces/create', to: 'pieces#create'
end

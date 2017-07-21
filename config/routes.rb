Rails.application.routes.draw do
devise_for :users# API routes path
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      #devise_for :users
      resources :users, :only => [:show, :create, :update, :destroy]
    end
  end  
end
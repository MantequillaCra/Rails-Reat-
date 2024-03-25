Rails.application.routes.draw do
  #API routes should be in /api/v1
  
  namespace :api do
    namespace :v1 do
      resources :posts do
        get "post_comments", to: "post_comments#comments_from_a_post"
      end
      resources :post_comments, except: [:comments_from_a_post]
      
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end

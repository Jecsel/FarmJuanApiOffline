Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#hello'
  get "ping", to:"application#ping"

  namespace :v1 do
    resources :user, only: [:index, :create] do
      collection do
        post 'sign_in'
        get 'get_users'
      end
    end
    resources :enrollment, only: [:index, :create, :show] do
      collection do
        post 'create_livelihoods'
        post 'create_farm_parcel'
        post 'get_profile'
        post 'get_main_livelihood'
        post 'get_farm_parcel'
      end
    end
    resources :dashboard, only: [:index] do
      collection do
        post 'list'
      end
    end
    resources :filter_dashboard, only:[:index] do
      collection do
        post 'filter_farm_parcel'
      end
    end
  end
end

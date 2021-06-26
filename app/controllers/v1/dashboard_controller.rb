class V1::DashboardController < ApplicationController
    before_action :must_be_authenticated

    def index
        @profile = Profile.all
    end
    
    def list
        p 'listing'
        # @profile = Profile.all.page(list_params[:page]).order(created_at: :desc)
        @profile = Profile.all.order(created_at: :desc)
        @data = @profile
        @municipality = Municipality.all
        render 'list.json.jbuilder'
    end
    private
    def list_params
        params.permit(:page)
    end
end

class V1::UserController < ApplicationController
    before_action :must_be_authenticated, only:[:authenticate]

    def index
      @users = User.all
      render 'index.json.jbuilder'
    end

    def get_users
      @users = User.all
      render 'get_users.json.jbuilder'
    end

    def login
      user = User.find_by_user user_params[:username]
      if user.present?
        if user.valid_passwd? user_params[:password]
          user.user_token = Generator.new().generate_alpha_numeric
          user.save!
          bearer_token = encode({user_id: user.id,secret: user.user_token})
          json_response(200, bearer_token)
          p bearer_token
        else
          invalid_account
        end
      else
        invalid_account
      end
    end
  
    def authenticate
      # #return admin user information here
      render json: {message: :accepted}
    end
  
    def get_policies
      if !@current_user.user_role.nil?
        @policies = @current_user.user_role.user_group.role_policies.group_by(&:service_id)
      else
        render json:{message: "User has no policies"}
      end
    end
  
    # def index
      # if is_permitted?(1,1)
      #   @user = User.get_list_by_role(@current_user.user_role.user_group.id)
      #   @user_group = UserGroup.get_by_role(@current_user.user_role.user_group.id)
      #   @role_policy = @current_user.user_role.user_group.role_policies.where("role_policies.service_id = ? ",1) #User service
      # else
      #   render json: :forbidden, status:403
      # end
    # end
  
    def create
      if !User.exists?(username: create_params[:username])
        temp_pass = rand.to_s[2..7] 
  
        @user           = User.new
        @user.username  = create_params[:username]
        @user.password  = temp_pass
        @user.is_active = create_params[:status]
    
        if @user.save!
          UserRole.create(user_id: @user.id, user_group_id: create_params[:user_group_id])
        end
        render json: {user: @user}
      else
        render json: {message: "Username already exists."}
      end
      
    end
  
    def sign_out
  
    end
  
    def update_pass
      user = User.find_by_username params[:user]
      user.update(first_login: false)
      user.update(password: Digest::MD5.hexdigest(params[:pass])[0..19])
  
      bearer_token = encode({user_id: user.id,secret: user.user_token})
  
      render json: {message: "Password updated successfully", token: bearer_token}
    end
    private 
    
  
    def set_new_pass user
      render json: {message:"Set new password"}
      return false
    end
  
    def invalid_account
      render json: {message:"Invalid Account"},status:403 #forbidden
      return false
    end
  
    def user_params
      params.require(:credential).permit(:username, :password)
    end
  
    def edit_params
      params.require(:user).permit(:id, :username, :user_group_id, :is_active)
    end
  
    def create_params
      params.require(:user).permit(:username, :email, :status, :user_group_id)
    end
  
end

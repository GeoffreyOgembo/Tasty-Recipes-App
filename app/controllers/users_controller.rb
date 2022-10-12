class UsersController < ApplicationController
    def index
        @users = User.all
        
        render json: @users
    end

    # '/users/:id' this shall define a show method for a given id user
    def show
        user = User.find(params[:id])
        render json: user
    end
    # POST/signup/create user
    def create

        user = User.create(create_params)
        if user.valid?
            session[:user_id] = user.id
            render json:user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /user
    
    private
    def create_params
        params.permit(:name, :email, :password_digest, :user_type)
    end

    
end
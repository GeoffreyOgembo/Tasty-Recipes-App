
class ApplicationController < ActionController::API
    before_action :authorized
    include ActionController::Cookies
    
    def authorized
        return render json: { errors: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end

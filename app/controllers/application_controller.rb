class ApplicationController < ActionController::API

    def authorize
        app_response(status_code: 401, message: "You are unauthorized to view this page") unless session.include? :user_id
    end

    def authorize_admin
        app_response(status_code: 401, message: "You cannot perform that action") unless session[:user_type] == "member"
    end

    def not_found(message: "Not found")
        app_response(status_code: 404, message: message)
    end
end

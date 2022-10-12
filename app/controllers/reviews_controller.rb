class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 


    def index 
        reviews = Review.all.order(rating: :textbody)
        render json: reviews, include: :recipes
    end 
    
    def show
        review = find_review
        render json: review
    end 

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created 
    end 

    def update 
        review = find_review 
        review.update!(review_params)
        render json: review 
    end 

    def destroy 
        review = find_review 
        review.destroy 
    end 
    
    private 

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:textbody, :rating, :user_id, :recipe_id)
    end

    def render_not_found_response
        render json: {error: "Review not found"}, status: :not_found
    end


end

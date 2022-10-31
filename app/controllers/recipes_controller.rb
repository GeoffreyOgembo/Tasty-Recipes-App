class RecipesController < ApplicationController
   
    # skip_before_action :authorize, only: [:index]
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   

    def index
        recipes = Recipe.all
        render json: recipes 
    end

    def show 
        recipe = find_recipe
        render json: recipe
    end

    def create 
        recipe = Recipe.create!(recipe_params)
        render json: recipe
    end

    def update
        recipe = find_recipe
        recipe.update!(recipe_params)
        render json: recipe
    end

    def destroy
        recipe = Recipe.find_by( params[:id])
        recipe.destroy
        head :no_content
    end

    private 

    def find_recipe
        Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:title, :description, :ingredients, :image_url, :user_id)
    end

    def render_not_found_response
        render json: {error: "Recipe not found"}, status: :not_found
    end


end

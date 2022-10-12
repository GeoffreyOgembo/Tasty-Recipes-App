class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :ingredients, :image_url
  #has_many :reviews 
  has_one :user
end

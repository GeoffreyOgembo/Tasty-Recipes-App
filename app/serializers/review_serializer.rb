class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user, :rating, :text_body
  belongs_to :user
  belongs_to :recipe 
end

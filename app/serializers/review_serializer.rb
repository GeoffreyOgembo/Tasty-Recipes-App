class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :textbody
  belongs_to :user
  belongs_to :recipe 
end

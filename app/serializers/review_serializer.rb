class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user, :text_body
  belongs_to :user
end

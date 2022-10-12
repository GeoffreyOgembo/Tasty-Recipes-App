class User < ApplicationRecord
    enum :user_type, { member: 1, admin: 2 }
    has_many :recipes
    has_many :reviews, through: :recipes

    validates :name, presence: true, uniqueness: true
    has_secure_password

end

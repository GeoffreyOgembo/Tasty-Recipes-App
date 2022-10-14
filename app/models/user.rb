class User < ApplicationRecord
    has_secure_password
    validates :email, 
        format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

    # enum :user_type, { member: 1, admin: 2 }
    # has_many :recipes
    # has_many :reviews, through: :recipes

    # validates :name, presence: true, uniqueness: true

end
    
    




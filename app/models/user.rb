class User < ApplicationRecord
  validates :email, uniqueness: true, format: { with: URI::MAILTO::EMAIL_REGEXP}, presence: true
  validates :password, presence: true, on: create
end

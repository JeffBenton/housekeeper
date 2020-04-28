class User < ApplicationRecord
  has_many :houses
  has_many :bookings

  validates :email, uniqueness: true, format: { with: URI::MAILTO::EMAIL_REGEXP}, presence: true
  validates :password, presence: true, on: create
end

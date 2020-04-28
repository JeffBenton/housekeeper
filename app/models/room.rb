class Room < ApplicationRecord
  belongs_to :house
  has_many :bookings
end

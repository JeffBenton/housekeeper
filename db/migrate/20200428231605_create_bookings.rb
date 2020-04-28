class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :arrival_date
      t.string :departure_date
      t.integer :house
      t.integer :user

      t.timestamps
    end
  end
end

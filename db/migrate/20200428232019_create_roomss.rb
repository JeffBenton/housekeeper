class CreateRoomss < ActiveRecord::Migration[6.0]
  def change
    create_table :roomsses do |t|
      t.integer :house
      t.integer :user
      t.integer :capacity
      t.boolean :booked
    end
  end
end

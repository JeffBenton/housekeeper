class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.integer :house
      t.integer :capacity

      t.timestamps
    end
  end
end

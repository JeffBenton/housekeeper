class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :address
      t.integer :owner
      t.integer :capacity

      t.timestamps
    end
  end
end

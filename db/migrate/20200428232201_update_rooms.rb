class UpdateRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :booked, :boolean
    add_column :rooms, :user, :integer
  end
end

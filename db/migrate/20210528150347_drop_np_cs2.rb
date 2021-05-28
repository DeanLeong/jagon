class DropNpCs2 < ActiveRecord::Migration[6.0]
  def change
    drop_table :npcs
  end
end
